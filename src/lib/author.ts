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

export const AUTHOR: AuthorProfile = {
  name: "kahko",
  title: "サクメシ運営 / 減量経験者",
  shortBio:
    "体重92kgから減量に取り組み、ボディメイク大会で入賞。自分の食事記録と失敗の積み重ねをもとに、続けられる食事管理の方法を発信しています。",
  bio: [
    "サクメシを運営している kahko です。もともと体重は92kgあり、何度もダイエットに挑戦しては失敗を繰り返してきました。",
    "きつい食事制限で一時的に落としてはリバウンドする、というループから抜け出せたのは、カロリーとPFCを数字で把握したうえで「続けられる範囲」に落とし込むやり方に変えてからでした。最終的にはボディメイクの大会に出場し、入賞することができました。",
    "その過程で一番面倒だったのが、毎回の栄養計算と献立づくりです。同じところでつまずく人は多いはずだと考え、質問に答えるだけで必要なカロリー・PFCと1週間分の食事メニューが出てくるサービスとして、サクメシを作りました。",
    "コラムは、自分が実際に試して効果があったこと・なかったことを軸に、厚生労働省などの公的資料で裏を取りながら書いています。医師・管理栄養士ではないため、診断や治療にあたる内容は扱いません。持病がある方や治療中の方は、必ず主治医・管理栄養士にご相談ください。",
  ],
  url: "https://sakumeshi.app/about#author",
  sameAs: ["https://note.com/kahko"],
};

/** Shown under every column. Required for YMYL (health) content. */
export const MEDICAL_DISCLAIMER =
  "本記事は健康的な食生活に関する一般的な情報提供を目的としたもので、医師による診断・治療・処方に代わるものではありません。持病のある方、妊娠中・授乳中の方、通院・服薬中の方は、食事内容を変更する前に主治医または管理栄養士にご相談ください。";

/** Site-wide wording of the same disclaimer, used on /about. */
export const MEDICAL_DISCLAIMER_SITE =
  "サクメシが提供する食事プランおよびコラムは、健康的な食生活に関する一般的な情報提供を目的としたもので、医師による診断・治療・処方に代わるものではありません。持病のある方、妊娠中・授乳中の方、通院・服薬中の方は、食事内容を変更する前に主治医または管理栄養士にご相談ください。";
