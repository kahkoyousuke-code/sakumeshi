/**
 * Single source of truth for article authorship (E-E-A-T).
 *
 * Every column renders this byline and the JSON-LD `author` field points at
 * `/about#author`, so search engines and ad reviewers can see who wrote the
 * health content instead of an anonymous organization name.
 */

export interface AuthorProfile {
  /** Pen name shown on every article */
  name: string;
  /** One-line role shown next to the name */
  title: string;
  /** Short bio shown in the article footer box */
  shortBio: string;
  /** Longer bio shown on /about */
  bio: string[];
  /** Stable anchor URL used as the JSON-LD author identifier */
  url: string;
  /** Profiles used as JSON-LD sameAs */
  sameAs: string[];
}

/**
 * Pen name is shared with the sister services (サクトレ / サクサプ) and the
 * note and X accounts, so a reviewer following any of them lands on the same
 * person. Keep it in sync when the other sites change.
 */
export const AUTHOR: AuthorProfile = {
  name: "motsu",
  title: "サクメシ運営 / フィジーク大会入賞",
  shortBio:
    "会社員をしながら筋トレとダイエットを10年以上続け、フィジーク大会で入賞。90kg台からの減量を経験しています。自分の食事記録と失敗の積み重ねをもとに、続けられる食事管理の方法を発信しています。",
  bio: [
    "サクメシを運営している motsu です。仕事をしながら10年以上、ゆるく筋トレとダイエットを続けている会社員で、フィジーク大会での入賞経験があります。",
    "もともとは体重90kg台で、何度もダイエットに挑戦しては失敗を繰り返してきました。きつい食事制限で一時的に落としてはリバウンドする、というループから抜け出せたのは、カロリーとPFCを数字で把握したうえで「続けられる範囲」に落とし込むやり方に変えてからです。",
    "その過程で一番面倒だったのが、毎回の栄養計算と献立づくりでした。同じところでつまずく人は多いはずだと考え、質問に答えるだけで必要なカロリー・PFCと1週間分の食事メニューが出てくるサービスとして、サクメシを作りました。トレーニングを扱う「サクトレ」、サプリメントを扱う「サクサプ」も同じ運営者です。",
    "コラムは、自分が実際に試して効果があったこと・なかったことを軸に、厚生労働省などの公的資料で裏を取りながら書いています。医師・管理栄養士ではないため、診断や治療にあたる内容は扱いません。持病がある方や治療中の方は、必ず主治医・管理栄養士にご相談ください。",
  ],
  url: "https://sakumeshi.app/about#author",
  sameAs: ["https://note.com/kahko", "https://x.com/MotMotsu"],
};

/** Shown under every column. Required for YMYL (health) content. */
export const MEDICAL_DISCLAIMER =
  "本記事は健康的な食生活に関する一般的な情報提供を目的としたもので、医師による診断・治療・処方に代わるものではありません。持病のある方、妊娠中・授乳中の方、通院・服薬中の方は、食事内容を変更する前に主治医または管理栄養士にご相談ください。";

/** Site-wide wording of the same disclaimer, used on /about. */
export const MEDICAL_DISCLAIMER_SITE =
  "サクメシが提供する食事プランおよびコラムは、健康的な食生活に関する一般的な情報提供を目的としたもので、医師による診断・治療・処方に代わるものではありません。持病のある方、妊娠中・授乳中の方、通院・服薬中の方は、食事内容を変更する前に主治医または管理栄養士にご相談ください。";
