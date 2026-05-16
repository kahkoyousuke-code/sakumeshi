"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DietPlan, MealItem, ShoppingList, ShoppingCategory, UserAnswers } from "@/lib/types";
import { rakutenSearchUrl, amazonSearchUrl } from "@/lib/affiliate";
import { SAKU_SUPPU_URL } from "@/lib/constants";
import DonutChart from "@/components/DonutChart";
import ResultTabs from "@/components/ResultTabs";

const SNACK_SUGGESTIONS = {
  lose: [
    { emoji: "🥚", name: "ゆで卵", detail: "1個 約80kcal / P:6g", fiber: 0 },
    { emoji: "🥛", name: "ギリシャヨーグルト", detail: "100g 約60kcal / P:10g", fiber: 0 },
    { emoji: "🍗", name: "サラダチキンバー", detail: "1本 約60kcal / P:13g", fiber: 0 },
    { emoji: "🌰", name: "素焼きアーモンド10粒", detail: "約60kcal / 良質な脂質", fiber: 1.5 },
  ],
  maintain: [
    { emoji: "🍫", name: "プロテインバー", detail: "約180kcal / P:15g", fiber: 3 },
    { emoji: "🍌", name: "バナナ1本", detail: "約90kcal / 手軽なエネルギー補給", fiber: 1.1 },
    { emoji: "🧀", name: "チーズ2個", detail: "約100kcal / P:6g", fiber: 0 },
    { emoji: "🍠", name: "干し芋", detail: "50g 約150kcal / 腹持ち◎", fiber: 2.3 },
  ],
  gain: [
    { emoji: "🍙", name: "おにぎり＋サラダチキン", detail: "約350kcal / P:20g", fiber: 0.5 },
    { emoji: "🥤", name: "プロテイン＋バナナ", detail: "約250kcal / P:25g", fiber: 1.1 },
    { emoji: "🍞", name: "あんぱん", detail: "約280kcal / トレ後の糖質補給に", fiber: 1.5 },
    { emoji: "🥜", name: "ミックスナッツ＋ドライフルーツ", detail: "約200kcal / 手軽にカロリーアップ", fiber: 2 },
  ],
} as const;

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<DietPlan | null>(null);
  const [shoppingList, setShoppingList] = useState<ShoppingList | null>(null);
  const [shoppingLoading, setShoppingLoading] = useState(false);
  const [shoppingError, setShoppingError] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [pdfLoading, setPdfLoading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("mealPlan") ?? localStorage.getItem("mealPlan");
    if (!stored) {
      router.push("/form");
      return;
    }
    setResult(JSON.parse(stored));
  }, [router]);

  async function handleRegenerateMeal(dayIndex: number, mealTime: MealItem["time"]) {
    if (!result) return;
    const rawAnswers = localStorage.getItem("userAnswers");
    if (!rawAnswers) return;
    const answers: UserAnswers = JSON.parse(rawAnswers);

    const res = await fetch("/api/regenerate-meal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        answers: {
          gender: answers.gender,
          age: answers.age,
          height: answers.height,
          goal: answers.goal,
          exercise: answers.exercise,
          preference: answers.preference,
        },
        day: result.menus[dayIndex].day,
        time: mealTime,
        targetCalories: result.targetCalories,
        protein: result.protein,
        fat: result.fat,
        carbs: result.carbs,
      }),
    });

    if (!res.ok) throw new Error("再生成に失敗しました");

    const newMeal: MealItem = await res.json();

    const newResult: DietPlan = {
      ...result,
      menus: result.menus.map((dayMenu, i) => {
        if (i !== dayIndex) return dayMenu;
        return {
          ...dayMenu,
          meals: dayMenu.meals.map((m) => (m.time === mealTime ? newMeal : m)),
        };
      }),
    };

    setResult(newResult);
    sessionStorage.setItem("mealPlan", JSON.stringify(newResult));
    localStorage.setItem("mealPlan", JSON.stringify(newResult));
  }

  async function handleGenerateShoppingList() {
    if (!result) return;
    setShoppingLoading(true);
    setShoppingError(null);
    setShoppingList(null);
    setCheckedItems({});

    try {
      const res = await fetch("/api/shopping-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ menus: result.menus }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "生成に失敗しました");
      }

      const data: ShoppingList = await res.json();
      setShoppingList(data);
    } catch (err) {
      setShoppingError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setShoppingLoading(false);
    }
  }

  async function handleDownloadPdf() {
    if (!result || !pdfRef.current) return;
    setPdfLoading(true);
    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);

      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const scaledHeight = (canvas.height / canvas.width) * pdfWidth * 2;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, scaledHeight);
      let heightLeft = scaledHeight - pdfHeight;
      let page = 1;
      while (heightLeft > 0) {
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, -(page * pdfHeight), pdfWidth, scaledHeight);
        heightLeft -= pdfHeight;
        page++;
      }

      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      pdf.save(`sakumeshi_plan_${dateStr}.pdf`);
    } finally {
      setPdfLoading(false);
    }
  }

  function toggleItem(categoryName: string, itemName: string) {
    const key = `${categoryName}__${itemName}`;
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  if (!result) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-400 animate-pulse">読み込み中...</p>
      </div>
    );
  }

  const goal = result.weeklyChange < 0 ? "lose" : result.weeklyChange > 0 ? "gain" : "maintain";
  const snacks = SNACK_SUGGESTIONS[goal];

  // DonutChart 用に PFCBalance 形式に変換
  const pfc = {
    protein: result.protein,
    fat: result.fat,
    carbs: result.carbs,
    calories: result.targetCalories,
  };

  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `AIに1週間分のダイエット食事プランを作ってもらった🍽️\n\n📊 目標カロリー：${result.targetCalories}kcal/日\n💪 タンパク質：${result.protein}g\n🔥 脂質：${result.fat}g\n🍚 炭水化物：${result.carbs}g\n\n#サクメシ #ダイエット #食事管理\nhttps://sakumeshi.vercel.app`
  )}`;

  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    "https://sakumeshi.vercel.app"
  )}&text=${encodeURIComponent(
    `AIが作ってくれたダイエット食事プラン👇\n目標カロリー${result.targetCalories}kcal、1週間分のメニューが自動生成されるよ！\n無料で使えるのでぜひ↓\nhttps://sakumeshi.vercel.app`
  )}`;

  const shareButtons = (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href={xShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-black text-white font-semibold rounded-xl hover:opacity-75 transition-opacity text-sm"
      >
        𝕏 Xでシェア
      </a>
      <a
        href={lineShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-[#06C755] text-white font-semibold rounded-xl hover:opacity-75 transition-opacity text-sm"
      >
        LINE
      </a>
      <button
        onClick={handleDownloadPdf}
        disabled={pdfLoading}
        className="flex items-center gap-2 px-5 py-2.5 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all duration-200 text-sm disabled:opacity-50"
      >
        {pdfLoading ? "生成中..." : "📄 PDFで保存"}
      </button>
    </div>
  );

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-10 space-y-8"
    >
      <h2 className="text-3xl font-bold text-center text-[var(--primary)]">
        あなたの食事プラン 🍽️
      </h2>

      {shareButtons}

      {/* 目標カロリーと PFC チャート */}
      <section className="bg-white rounded-2xl shadow-md p-6 space-y-5">
        <h3 className="text-lg font-semibold text-gray-700">
          目標栄養バランス（{result.targetCalories}kcal/日）
        </h3>
        <DonutChart pfc={pfc} />

        {/* 食物繊維プログレスバー */}
        {result.totalFiber != null && (
          <div className="pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-semibold text-emerald-700">食物繊維</span>
              <span className="text-sm text-gray-600">
                <span className="font-bold text-emerald-700">{result.totalFiber}g</span>
                <span className="text-xs text-gray-400">/日（目標 20g 以上）</span>
              </span>
            </div>
            <div className="w-full bg-emerald-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full bg-emerald-500 transition-all duration-700"
                style={{ width: `${Math.min((result.totalFiber / 30) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {result.totalFiber >= 20
                ? "✓ 目標達成！腸活にも効果的です"
                : `あと ${20 - result.totalFiber}g で目標達成`}
            </p>
          </div>
        )}
      </section>

      {/* BMR / TDEE / 週間変化 */}
      <section className="bg-white rounded-2xl shadow-md p-5">
        <div className="grid grid-cols-3 divide-x text-center">
          <div className="px-4">
            <p className="text-xs text-gray-400 mb-1">基礎代謝 BMR</p>
            <p className="text-lg font-bold text-gray-700">
              {result.bmr}
              <span className="text-xs font-normal text-gray-400">kcal</span>
            </p>
          </div>
          <div className="px-4">
            <p className="text-xs text-gray-400 mb-1">消費カロリー TDEE</p>
            <p className="text-lg font-bold text-gray-700">
              {result.tdee}
              <span className="text-xs font-normal text-gray-400">kcal</span>
            </p>
          </div>
          <div className="px-4">
            <p className="text-xs text-gray-400 mb-1">週間変化</p>
            <p className="text-lg font-bold text-[var(--primary)]">
              {result.weeklyChange > 0 ? "+" : ""}
              {result.weeklyChange}
              <span className="text-xs font-normal">kg</span>
            </p>
          </div>
        </div>
      </section>

      {/* AI アドバイス */}
      <section className="bg-[var(--primary-light)] rounded-2xl p-5 space-y-2">
        <p className="font-bold text-[var(--primary)] text-sm">AIアドバイス</p>
        <ul className="list-disc list-inside space-y-1">
          {result.advice?.map((item, i) => (
            <li key={i} className="text-sm text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={SAKU_SUPPU_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between mt-3 px-4 py-3 rounded-xl text-sm font-medium transition-opacity duration-200 hover:opacity-75"
          style={{
            background: "rgba(59, 130, 246, 0.07)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            color: "#3B82F6",
          }}
        >
          <span>💊 食事と一緒にサプリも最適化しよう</span>
          <span className="font-semibold">→ サクサプへ</span>
        </a>
      </section>

      {/* 7日間の食事メニュー */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          7日間の食事メニュー
        </h3>
        <ResultTabs menus={result.menus ?? []} onRegenerate={handleRegenerateMeal} />
      </section>

      {/* 買い物リスト */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">🛒 買い物リスト</h3>

        {!shoppingList && !shoppingLoading && (
          <button
            onClick={handleGenerateShoppingList}
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm"
          >
            🛒 買い物リストを作る
          </button>
        )}

        {shoppingLoading && (
          <div className="flex flex-col items-center gap-3 py-8 text-green-600">
            <div className="w-8 h-8 border-4 border-green-300 border-t-green-600 rounded-full animate-spin" />
            <p className="text-sm">食材を抽出中...</p>
          </div>
        )}

        {shoppingError && (
          <div className="text-center space-y-3">
            <p className="text-sm text-red-500">{shoppingError}</p>
            <button
              onClick={handleGenerateShoppingList}
              className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300"
            >
              再試行
            </button>
          </div>
        )}

        {shoppingList && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shoppingList.categories
                .filter((cat: ShoppingCategory) => cat.items.length > 0)
                .map((cat: ShoppingCategory) => (
                  <div
                    key={cat.name}
                    className="bg-green-50 rounded-xl border border-green-100 p-4"
                  >
                    <p className="text-sm font-bold text-green-800 mb-2">
                      {cat.emoji} {cat.name}
                    </p>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => {
                        const key = `${cat.name}__${item.name}`;
                        const checked = !!checkedItems[key];
                        return (
                          <li key={item.name} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={key}
                              checked={checked}
                              onChange={() => toggleItem(cat.name, item.name)}
                              className="w-4 h-4 accent-green-500 shrink-0 cursor-pointer"
                            />
                            <label
                              htmlFor={key}
                              className={`text-sm cursor-pointer flex-1 ${
                                checked ? "line-through text-gray-400" : "text-gray-700"
                              }`}
                            >
                              {item.name}
                              <span className="text-xs text-gray-400 ml-1">
                                {item.amount}
                              </span>
                            </label>
                            <a
                              href={rakutenSearchUrl(item.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded text-white bg-red-500 hover:bg-red-600 transition-colors"
                            >
                              楽天
                            </a>
                            <a
                              href={amazonSearchUrl(item.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded text-white bg-orange-400 hover:bg-orange-500 transition-colors"
                            >
                              Amazon
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
            </div>
            <button
              onClick={handleGenerateShoppingList}
              className="text-sm text-green-600 underline underline-offset-2 hover:text-green-800 transition-colors"
            >
              再生成する
            </button>
          </div>
        )}
      </section>

      {/* おすすめ間食 */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">🥗 おすすめ間食</h3>
        <div className="grid grid-cols-2 gap-3">
          {snacks.map((snack) => (
            <div
              key={snack.name}
              className="flex items-start gap-3 bg-green-50 rounded-xl p-3 border border-green-100"
            >
              <span className="text-2xl leading-none mt-0.5">{snack.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-green-800">{snack.name}</p>
                <p className="text-xs text-green-600 mt-0.5">{snack.detail}</p>
                {snack.fiber > 0 && (
                  <p className="text-xs text-emerald-600 mt-0.5 font-medium">食物繊維 {snack.fiber}g</p>
                )}
                <div className="flex gap-1.5 mt-2">
                  <a
                    href={rakutenSearchUrl(snack.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    楽天
                  </a>
                  <a
                    href={amazonSearchUrl(snack.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white bg-orange-400 hover:bg-orange-500 transition-colors"
                  >
                    Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center gap-4">
        {shareButtons}
        <button
          onClick={() => router.push("/form")}
          className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
        >
          もう一度診断する
        </button>
      </div>
    </motion.div>

    {/* PDF生成用の隠しコンテンツ（html2canvasでキャプチャ） */}
    <div
      ref={pdfRef}
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "794px",
        backgroundColor: "#ffffff",
        padding: "48px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#111111",
        lineHeight: "1.6",
      }}
    >
      {/* ヘッダー */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", paddingBottom: "16px", borderBottom: "3px solid #22c55e" }}>
        <div>
          <div style={{ fontSize: "22px", fontWeight: "bold", color: "#22c55e" }}>🥗 サクメシ</div>
          <div style={{ fontSize: "17px", fontWeight: "bold", marginTop: "4px", color: "#111" }}>あなたの食事プラン</div>
        </div>
        <div style={{ fontSize: "12px", color: "#888" }}>生成日：{new Date().toLocaleDateString("ja-JP")}</div>
      </div>

      {/* カロリー・PFC */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>📊 カロリー・栄養素</div>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { label: "目標カロリー", value: `${result.targetCalories}kcal`, color: "#f59e0b" },
            { label: "タンパク質", value: `${result.protein}g`, color: "#3b82f6" },
            { label: "脂質", value: `${result.fat}g`, color: "#ef4444" },
            { label: "炭水化物", value: `${result.carbs}g`, color: "#f97316" },
            { label: "食物繊維", value: `${result.totalFiber}g`, color: "#22c55e" },
          ].map((item) => (
            <div key={item.label} style={{ flex: 1, textAlign: "center", padding: "10px 8px", backgroundColor: "#f9fafb", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: item.color }}>{item.value}</div>
              <div style={{ fontSize: "10px", color: "#666", marginTop: "4px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 7日間メニュー */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>🍽️ 7日間の食事メニュー</div>
        {result.menus?.map((dayMenu, i) => (
          <div key={i} style={{ marginBottom: "10px", border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ backgroundColor: "#22c55e", color: "#fff", padding: "5px 12px", fontWeight: "bold", fontSize: "12px" }}>
              {dayMenu.day}
            </div>
            <div style={{ padding: "6px 12px" }}>
              {dayMenu.meals.map((meal, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", padding: "5px 0", borderBottom: j < dayMenu.meals.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ width: "28px", fontSize: "10px", color: "#999", flexShrink: 0, paddingTop: "2px" }}>{meal.time}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "12px", fontWeight: "bold", color: "#222" }}>{meal.name}</div>
                    <div style={{ fontSize: "10px", color: "#888", marginTop: "2px" }}>
                      {meal.calories}kcal　P:{meal.protein}g　F:{meal.fat}g　C:{meal.carbs}g
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* おすすめ間食 */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>🥗 おすすめ間食</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {snacks.map((snack) => (
            <div key={snack.name} style={{ display: "flex", gap: "8px", padding: "8px 10px", backgroundColor: "#f0fdf4", borderRadius: "8px", border: "1px solid #d1fae5" }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>{snack.emoji}</span>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "bold", color: "#166534" }}>{snack.name}</div>
                <div style={{ fontSize: "10px", color: "#16a34a", marginTop: "2px" }}>{snack.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* アドバイス */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>💡 AIアドバイス</div>
        <div style={{ backgroundColor: "#f0fdf4", borderRadius: "8px", padding: "14px 16px" }}>
          {result.advice?.map((item, i) => (
            <div key={i} style={{ fontSize: "11px", color: "#374151", padding: "3px 0", display: "flex", gap: "8px" }}>
              <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* フッター */}
      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "14px", textAlign: "center", fontSize: "11px", color: "#9ca3af" }}>
        サクメシ　https://sakumeshi.vercel.app
      </div>
    </div>
    </>
  );
}
