/**
 * Public references cited at the bottom of each column.
 *
 * Health (YMYL) content needs verifiable sources. Only add entries that point
 * at primary public institutions (ministries, national research institutes) —
 * never blogs or affiliate sites.
 */

export interface Source {
  label: string;
  publisher: string;
  url: string;
}

export const SOURCES = {
  dietaryReference: {
    label: "「日本人の食事摂取基準（2025年版）」策定検討会報告書",
    publisher: "厚生労働省",
    url: "https://www.mhlw.go.jp/stf/newpage_44138.html",
  },
  obesity: {
    label: "肥満と健康",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/food/e-02-001.html",
  },
  protein: {
    label: "たんぱく質",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/dictionary/food/ye-044.html",
  },
  carbohydrate: {
    label: "炭水化物 / 糖質",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/dictionary/food/ye-018.html",
  },
  energyMetabolism: {
    label: "身体活動とエネルギー代謝",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/exercise/s-02-003.html",
  },
  dietaryFiber: {
    label: "食物繊維の必要性と健康",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/food/e-05-001.html",
  },
  gutBacteria: {
    label: "腸内細菌と健康",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/food/e-05-003.html",
  },
  bloodSugar: {
    label: "血糖値",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/dictionary/metabolic/ym-085.html",
  },
  insulin: {
    label: "インスリン",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/dictionary/metabolic/ym-011.html",
  },
  diabetes: {
    label: "糖尿病",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/dictionary/metabolic/ym-048.html",
  },
  sleepLifestyle: {
    label: "睡眠と生活習慣病との深い関係",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/heart/k-02-008.html",
  },
  goodSleep: {
    label: "快眠と生活習慣",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/heart/k-01-004.html",
  },
  alcoholAbsorption: {
    label: "アルコールの吸収と分解",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/alcohol/a-02-002.html",
  },
  alcoholEffects: {
    label: "アルコールの作用",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/alcohol/a-02-003.html",
  },
  nutritionLabel: {
    label: "栄養成分表示の活用",
    publisher: "厚生労働省 e-ヘルスネット",
    url: "https://www.e-healthnet.mhlw.go.jp/information/food/e-03-004.html",
  },
} as const satisfies Record<string, Source>;

type SourceKey = keyof typeof SOURCES;

/** Sources shown when a column has no specific entry below. */
const DEFAULT_SOURCE_KEYS: SourceKey[] = ["dietaryReference", "obesity"];

const COLUMN_SOURCE_KEYS: Partial<Record<string, SourceKey[]>> = {
  "lowcarb-vs-lowfat": ["dietaryReference", "carbohydrate", "bloodSugar"],
  "pfc-calculation": ["dietaryReference", "protein", "carbohydrate"],
  "diet-snacks": ["dietaryReference", "nutritionLabel", "bloodSugar"],
  "boost-metabolism": ["energyMetabolism", "protein", "dietaryReference"],
  "convenience-diet": ["nutritionLabel", "dietaryReference", "obesity"],
  "workout-meal-timing": ["protein", "energyMetabolism", "dietaryReference"],
  "eating-order": ["bloodSugar", "insulin", "dietaryFiber"],
  "eating-out": ["nutritionLabel", "obesity", "dietaryReference"],
  "no-rebound": ["obesity", "energyMetabolism", "dietaryReference"],
  "alcohol-diet": ["alcoholAbsorption", "alcoholEffects", "obesity"],
  "gut-health-diet": ["gutBacteria", "dietaryFiber", "dietaryReference"],
  "protein-intake": ["protein", "dietaryReference", "energyMetabolism"],
  "diet-plateau": ["energyMetabolism", "obesity", "dietaryReference"],
  "sleep-diet": ["sleepLifestyle", "goodSleep", "obesity"],
  "water-intake": ["energyMetabolism", "dietaryReference", "obesity"],
  "meal-prep": ["dietaryReference", "nutritionLabel", "protein"],
  "diet-over-40": ["energyMetabolism", "dietaryReference", "obesity"],
  "female-cycle-diet": ["dietaryReference", "obesity", "energyMetabolism"],
  "gi-index": ["bloodSugar", "insulin", "carbohydrate"],
  "intermittent-fasting": ["bloodSugar", "dietaryReference", "obesity"],
  "appetite-control": ["bloodSugar", "sleepLifestyle", "protein"],
  "no-exercise-diet": ["energyMetabolism", "obesity", "dietaryReference"],
  "salt-swelling": ["dietaryReference", "obesity", "nutritionLabel"],
  "daily-calories": ["dietaryReference", "energyMetabolism", "obesity"],
  "lose-3kg-month": ["obesity", "energyMetabolism", "dietaryReference"],
  "diet-foods": ["dietaryReference", "protein", "dietaryFiber"],
  "late-night-meal": ["sleepLifestyle", "bloodSugar", "diabetes"],
};

export function getSources(slug: string): Source[] {
  const keys = COLUMN_SOURCE_KEYS[slug] ?? DEFAULT_SOURCE_KEYS;
  return keys.map((key) => SOURCES[key]);
}
