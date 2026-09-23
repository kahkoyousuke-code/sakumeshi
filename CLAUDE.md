# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 開発サーバー起動 (http://localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint 実行
npm test         # Vitest 実行（栄養計算ロジックのユニットテスト）
npm run seo:fetch   # Search Console から検索パフォーマンスを取得（.gsc/latest.json）
npm run seo:report  # 取得結果から「次にどこを直すか」の一覧を Markdown で出す
```

テストは Vitest で `src/lib/` のロジックのみ（UI・API route 自体のテストは無い）。

- `nutrition.test.ts`：`calcNutrition` / `assessPace`
- `validate.test.ts`：`validateAnswers`（API の入力チェック）
- `rate-limit.test.ts`：`getClientIp` / `checkRateLimit`（メモリ方式・Upstash 方式・障害時のフォールバック）

## 環境変数

| 変数名 | 用途 |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API（必須・サーバーサイドのみ） |
| `NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID` | 楽天アフィリエイトID（任意） |
| `NEXT_PUBLIC_AMAZON_AFFILIATE_TAG` | Amazon アソシエイトタグ（任意） |
| `UPSTASH_REDIS_REST_URL` | レート制限用 Upstash Redis の REST URL（任意・未設定ならメモリ方式） |
| `UPSTASH_REDIS_REST_TOKEN` | 同上のトークン（任意） |
| `NEXT_PUBLIC_CONTACT_FORM_URL` | お問い合わせページの Google フォーム URL（任意・未設定なら準備中表示） |
| `GSC_SERVICE_ACCOUNT_JSON` | Search Console API 用サービスアカウントの鍵 JSON（または その base64。任意・`npm run seo:fetch` のみが使う） |
| `GSC_SITE_URL` | Search Console の対象プロパティ（任意・既定は `seo.config.mjs` の `https://sakumeshi.app/`） |

## アーキテクチャ

### 技術スタック

- **Next.js 16** App Router、**React 19**、**TypeScript**、**Tailwind CSS v4**
- **Anthropic SDK** (`@anthropic-ai/sdk`) で Claude API を呼び出し
- **Framer Motion** でページアニメーション
- **jsPDF + html2canvas** で PDF 生成（結果ページ）
- Vercel にデプロイ（`maxDuration` を各 API route で設定済み）

### ユーザーフロー

```
/ (LP) → /form (10ステップ) → API /generate (ストリーミング) → /result (食事プラン表示)
```

フォーム回答と生成結果は `sessionStorage` と `localStorage` の両方に保存する（`mealPlan`、`userAnswers` キー）。`/result` は sessionStorage/localStorage から読み込み、なければ `/form` にリダイレクト。

### API Routes

| Route | モデル | 処理 |
|---|---|---|
| `POST /api/generate` | `claude-sonnet-4-6` | ストリーミングで7日間食事プランを生成。`src/lib/nutrition.ts` の `calcNutrition()` でカロリー・PFC を計算してプロンプトに埋め込む。避ける食材（アレルギー・苦手）もプロンプトに反映。`src/lib/rate-limit.ts` でIP別1時間5回のレート制限（`prefix: "gen"`） |
| `POST /api/regenerate-meal` | `claude-haiku-4-5-20251001` | 1食だけ差し替え生成（低コスト）。避ける食材を反映。結果ページの「この日をまるごと変える」はこのAPIを3食分並列に呼ぶ。レート制限はIP別1時間30回（`prefix: "regen"`、3並列のため約10日分） |
| `POST /api/shopping-list` | `claude-sonnet-4-6` | 7日分メニューから買い物リストを生成。レート制限はIP別1時間10回（`prefix: "shop"`） |

レート制限（`src/lib/rate-limit.ts`）は `checkRateLimit(ip, { max, windowSec, prefix })` でエンドポイント別バケットを分ける（`prefix` が違えばカウント独立）。IP 取得は同モジュールの `getClientIp(req)` を使う。Upstash 未設定時はメモリ方式にフォールバックするため、本番で確実に効かせるには `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` の設定が必要。

### データフロー の重要な設計

- **栄養計算はサーバーサイドで行う**：`src/lib/nutrition.ts` の `calcNutrition()` でハリス・ベネディクト方程式（男女別）を使い BMR→TDEE→目標カロリー→PFC を計算（`/api/generate` から呼び出す）。この値をプロンプトに埋め込み、Claude には JSON 出力のみ求める。同モジュールの `assessPace()` は目標体重・期間が現実的かを判定し、フォーム（期間ステップ）で無理なペースを警告する。これらは `nutrition.test.ts` でテスト済み。
- **ストリーミング JSON パース**：`/form/page.tsx` では Claude のストリームを蓄積してから `{` ～ `}` で切り出してパース。パース失敗時はスタックトレースでブラケットを補完する修復ロジックがある。
- **`UserAnswers` 型の数値フィールド注意**：`StepForm` では `age`/`height`/`currentWeight`/`targetWeight` を文字列として扱うため、送信直前に `Number()` 変換している（`/form/page.tsx` の `handleNext`）。API 側でも `src/lib/validate.ts` の `validateAnswers` で型チェックする。型定義は `src/lib/types.ts` の `UserAnswers` に一本化（各 API・コンポーネントはここを import）。
- **アレルギー・苦手食材**：`UserAnswers.dislikes`（string 配列、`"none"` のみで「特になし」）。`FORM_STEPS` の `dislikes` ステップ（multiselect）で入力し、`/api/generate`・`/api/regenerate-meal` のプロンプトで除外指示に変換する。

### コンポーネント構成

- **`StepForm`**：`src/lib/constants.ts` の `FORM_STEPS` 配列が質問定義のシングルソース。質問を追加・変更するにはここを編集する。
- **`ResultTabs`**：7日間メニューをタブ切替で表示、各食事に1食差し替えボタン付き。
- **`DonutChart`**：PFC バランスを円グラフで描画。
- **`MealCard`**：食事1件の表示。

### コラム

`src/app/column/` 配下に静的ページとして実装。`src/lib/columns.ts` の `COLUMNS` 配列がコラム一覧のシングルソース。新しいコラムを追加するには `COLUMNS` にエントリを追加してから `src/app/column/<slug>/page.tsx` を作成する。

- 各エントリは `related`（記事末尾に表示する関連コラムの slug 配列）が必須。`getRelatedColumns(slug)` が解決し、未解決時は最新3件にフォールバックする。一覧の日付降順ソートは `columnsByDateDesc()`。
- `updated` は任意。記事を大幅に改稿したときだけ入れる。バイライン（`公開 … / 更新 …`）・JSON-LD の `dateModified`・sitemap の `lastModified` がこれを見る。
- 記事の共通レイアウト（戻るリンク・ヘッダー・目次・CTA・関連コラム・note誘導・JSON-LD）は `src/components/column/ColumnShell.tsx` と `ColumnFooter.tsx`。新規記事は `ColumnShell` で本文だけ書く。
- `ColumnHeader.tsx` が H1 と著者バイラインを描画する。`ColumnShell` は自動で使うが、`ColumnShell` を使わない旧記事は個別に `<ColumnHeader slug h1 />` を置いている（H1 が `COLUMNS.title` と異なるため `h1` を渡す）。

#### E-E-A-T（健康＝YMYL 向け・AdSense 対策）

匿名・無出典は AdSense の「有用性の低いコンテンツ」判定に直結するため、以下は全記事で必ず出す。`ColumnFooter` が自動でレンダリングするので、新規記事側の作業は不要。

- **著者**：`src/lib/author.ts` の `AUTHOR` がシングルソース。バイライン・記事末尾の著者ボックス・`/about#author`・JSON-LD の `author`（`@type: Person`、`sameAs` に note）が全部ここを参照する。
- **出典**：`src/lib/sources.ts` の `SOURCES`（厚労省の公的資料のみ）と `COLUMN_SOURCE_KEYS`（slug → 出典キー）。`getSources(slug)` が解決し、未定義の slug は `DEFAULT_SOURCE_KEYS` にフォールバック。**新しいコラムを足したら `COLUMN_SOURCE_KEYS` にも追加する**。個人ブログ・アフィリエイトサイトは出典に入れない。
  - e-ヘルスネットは2025年4月に **`kennet.mhlw.go.jp`（健康づくりサポートネット）** へ統合され、旧 `www.e-healthnet.mhlw.go.jp` は**名前解決すらできない**。旧URLをそのまま貼らないこと。パスの対応は `/information/<cat>/<file>.html` → `/information/information/<cat>/<file>.html`。
  - 出典を追加・変更したら、必ず全URLの死活を確認する：
    ```bash
    sed -n 's/.*url: "\(https[^"]*\)".*/\1/p' src/lib/sources.ts | sort -u | while read -r u; do echo "$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 20 "$u")  $u"; done
    ```
  - 記事中に出典由来の数値を書くときは、必ず出典ページの現物と突き合わせる（例：食物繊維の目標量は男性20g／女性18g、成人平均18.1g）。古い版の数字が流通しているので記憶で書かない。
- **医療免責**：`MEDICAL_DISCLAIMER`（記事用）/ `MEDICAL_DISCLAIMER_SITE`（`/about` 用）。

### SEO（robots / sitemap / canonical）

`src/app/robots.ts` が `/robots.txt` を生成する。sitemap の場所と `Host` を宣言し、`/api/` と `/result` を Disallow している。

`src/app/sitemap.ts` の `lastModified` は**ビルド時刻ではなく実際の更新日**を入れる。`new Date()` を直接使うとデプロイのたび全ページが更新扱いになり Google が日付を信用しなくなるため、静的ページは同ファイル冒頭の `LAST_MODIFIED` 定数を手で更新する。コラム個別ページは `COLUMNS` の `updated ?? date`、`/column` 一覧はその最新値を自動で使う。

#### canonical / OGP

ページの `metadata` は `src/lib/metadata.ts` のヘルパーで組み立てる。**手書きしない**。

- 通常ページ：`pageMetadata({ path, title, description })`
- コラム記事：`columnMetadata(slug, { title, description })`（`COLUMNS` の公開日・更新日と `AUTHOR` を OGP の article として付ける）

canonical（`metadataBase` からのルート相対パス）と `openGraph` / `twitter` をここでまとめて生成するので、両者がずれない。**新しいページを追加したら必ずどちらかを使う**。

ヘルパーを使う理由：Next.js は `openGraph` を layout とページで**マージしない**。ページ側で書かないとルート `layout.tsx` の OGP をそのまま継承するため、書き忘れると全ページがトップページのタイトル・説明・URL でシェアされる（実際に全コラムがこの状態だった）。canonical だけ書いても OGP は直らない。

`/form`・`/result` はページ本体が client component で `metadata` を export できないため、`src/app/form/layout.tsx` / `src/app/result/layout.tsx` で宣言している。この2つは意図的にトップページの OGP を継承する（`/result` はユーザー個別の生成結果なので `robots: { index: false }` も付与、sitemap にも未掲載）。

#### パンくずリスト

`src/components/Breadcrumbs.tsx` が見えるパンくずと `BreadcrumbList` の JSON-LD を同時に出す（Google は表示内容と構造化データの一致を求めるため、必ず同じ配列から作る）。コラム記事は `ColumnShell` が自動で出すので新規記事側の作業は不要。`ColumnShell` を使わない旧記事4本（boost-metabolism / diet-snacks / lowcarb-vs-lowfat / pfc-calculation）は個別に置いている。

#### Search Console を見て対策を立てる

`docs/seo-workflow.md` が手順の正本。`.claude/agents/seo-analyst.md`（SEO担当エージェント）も
そこを読みに来るだけにしてある。

- `npm run seo:fetch` で Search Console から取得し、`npm run seo:report` で
  「あと一歩のクエリ」「クリックされていないページ」「未インデックス」などを一覧にする
- 認証情報が無くても、GSC の画面からエクスポートした CSV を `.gsc/csv/` に置けば
  `seo:report` だけで動く
- **`.gsc/` は git 管理外**。認証情報も取得データもコミットしない
- `scripts/` の3ファイル（`gsc-fetch.mjs` / `seo-report.mjs` / `seo-config.mjs`）は
  サイトに依存せず、姉妹サービス（サクサプ・サクトレ）と同一。サクメシ固有の設定は
  **`seo.config.mjs`** の1枚だけ。記事を足したらそこの `keywords` にも足す
- レポートが「タイトルを直せ」と言うのは `src/app/column/<slug>/page.tsx` の
  `columnMetadata()` のほう（検索結果に出るのはこちら）

### スタイリング

Tailwind CSS v4。カラーは CSS 変数で管理：

```css
--primary: #4CAF50   /* メインカラー（グリーン） */
--primary-light: rgba(76, 175, 80, 0.1)
--secondary: #66BB6A
--accent: #2E7D32
```

Tailwind クラスで `text-[var(--primary)]` のように参照する。

### アフィリエイト

`src/lib/affiliate.ts` の `rakutenSearchUrl()` / `amazonSearchUrl()` が楽天・Amazon の検索 URL を生成。食材・間食カードに使用している。環境変数が未設定でも URL は生成される（アフィリエイトタグなしになるだけ）。
