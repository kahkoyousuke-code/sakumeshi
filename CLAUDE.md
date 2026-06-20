# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 開発サーバー起動 (http://localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint 実行
npm test         # Vitest 実行（栄養計算ロジックのユニットテスト）
```

テストは Vitest で `src/lib/nutrition.test.ts`（`calcNutrition` / `assessPace`）のみ。UI・API のテストは無い。

## 環境変数

| 変数名 | 用途 |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API（必須・サーバーサイドのみ） |
| `NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID` | 楽天アフィリエイトID（任意） |
| `NEXT_PUBLIC_AMAZON_AFFILIATE_TAG` | Amazon アソシエイトタグ（任意） |
| `UPSTASH_REDIS_REST_URL` | レート制限用 Upstash Redis の REST URL（任意・未設定ならメモリ方式） |
| `UPSTASH_REDIS_REST_TOKEN` | 同上のトークン（任意） |
| `NEXT_PUBLIC_CONTACT_FORM_URL` | お問い合わせページの Google フォーム URL（任意・未設定なら準備中表示） |

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
| `POST /api/generate` | `claude-sonnet-4-6` | ストリーミングで7日間食事プランを生成。`src/lib/nutrition.ts` の `calcNutrition()` でカロリー・PFC を計算してプロンプトに埋め込む。避ける食材（アレルギー・苦手）もプロンプトに反映。`src/lib/rate-limit.ts` でIP別1時間5回のレート制限 |
| `POST /api/regenerate-meal` | `claude-haiku-4-5-20251001` | 1食だけ差し替え生成（低コスト）。避ける食材を反映。結果ページの「この日をまるごと変える」はこのAPIを3食分並列に呼ぶ |
| `POST /api/shopping-list` | `claude-sonnet-4-6` | 7日分メニューから買い物リストを生成 |

### データフロー の重要な設計

- **栄養計算はサーバーサイドで行う**：`src/lib/nutrition.ts` の `calcNutrition()` でハリス・ベネディクト方程式（男女別）を使い BMR→TDEE→目標カロリー→PFC を計算（`/api/generate` から呼び出す）。この値をプロンプトに埋め込み、Claude には JSON 出力のみ求める。同モジュールの `assessPace()` は目標体重・期間が現実的かを判定し、フォーム（期間ステップ）で無理なペースを警告する。これらは `nutrition.test.ts` でテスト済み。
- **ストリーミング JSON パース**：`/form/page.tsx` では Claude のストリームを蓄積してから `{` ～ `}` で切り出してパース。パース失敗時はスタックトレースでブラケットを補完する修復ロジックがある。
- **`UserAnswers` 型の数値フィールド注意**：`StepForm` では `age`/`height`/`currentWeight`/`targetWeight` を文字列として扱うため、送信直前に `Number()` 変換している（`/form/page.tsx` の `handleNext`）。API 側でも `validateAnswers` で型チェックする。型定義は `src/lib/types.ts` の `UserAnswers` に一本化（各 API・コンポーネントはここを import）。
- **アレルギー・苦手食材**：`UserAnswers.dislikes`（string 配列、`"none"` のみで「特になし」）。`FORM_STEPS` の `dislikes` ステップ（multiselect）で入力し、`/api/generate`・`/api/regenerate-meal` のプロンプトで除外指示に変換する。

### コンポーネント構成

- **`StepForm`**：`src/lib/constants.ts` の `FORM_STEPS` 配列が質問定義のシングルソース。質問を追加・変更するにはここを編集する。
- **`ResultTabs`**：7日間メニューをタブ切替で表示、各食事に1食差し替えボタン付き。
- **`DonutChart`**：PFC バランスを円グラフで描画。
- **`MealCard`**：食事1件の表示。

### コラム

`src/app/column/` 配下に静的ページとして実装。`src/lib/columns.ts` の `COLUMNS` 配列がコラム一覧のシングルソース。新しいコラムを追加するには `COLUMNS` にエントリを追加してから `src/app/column/<slug>/page.tsx` を作成する。

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
