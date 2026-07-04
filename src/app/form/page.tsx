"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StepForm from "@/components/StepForm";
import { UserAnswers } from "@/lib/types";

// 生成待ち中に順番に表示するメッセージ（体感待ち時間を短くする）
const LOADING_MESSAGES = [
  "あなたの目標カロリーを計算中...",
  "PFCバランスを調整中...",
  "7日分の献立を考え中...",
  "食材の使い回しを最適化中...",
  "コンビニ代替メニューを選定中...",
  "仕上げをしています...",
];

function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((i) => Math.min(i + 1, LOADING_MESSAGES.length - 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <div className="h-12 w-12 rounded-full border-4 border-[var(--primary)] border-t-transparent animate-spin" />
      <p className="text-gray-600 animate-pulse text-lg font-medium">
        {LOADING_MESSAGES[messageIndex]}
      </p>
      <p className="text-gray-400 text-sm">
        AIが7日分の献立を作成しています（30秒〜1分ほどかかります）
      </p>
    </div>
  );
}

export default function FormPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastInput, setLastInput] = useState<UserAnswers | null>(null);

  const handleSubmit = async (input: UserAnswers) => {
    setIsLoading(true);
    setErrorMessage(null);
    setLastInput(input);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error(
            "アクセスが集中しています。1時間ほど時間をおいてからもう一度お試しください"
          );
        }
        throw new Error("APIエラーが発生しました");
      }
      if (!res.body) throw new Error("レスポンスボディが空です");

      // ストリーミング受信：チャンクを順次蓄積
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
      }
      // 残バッファをフラッシュ
      accumulated += decoder.decode();

      // ストリーム完了後に一括パース
      // JSON以外のテキストが混ざっている場合に備えて { } の範囲を抽出
      const jsonStart = accumulated.indexOf('{');
      const jsonEnd = accumulated.lastIndexOf('}');
      const jsonStr = accumulated.substring(jsonStart, jsonEnd + 1);

      let data;
      try {
        data = JSON.parse(jsonStr);
      } catch {
        // スタックで未閉じの括弧を追跡して補完する
        const stack: string[] = [];
        let inString = false;
        let escape = false;
        for (const ch of jsonStr) {
          if (escape) { escape = false; continue; }
          if (ch === "\\" && inString) { escape = true; continue; }
          if (ch === '"') { inString = !inString; continue; }
          if (inString) continue;
          if (ch === "{" || ch === "[") stack.push(ch === "{" ? "}" : "]");
          else if (ch === "}" || ch === "]") stack.pop();
        }
        const repaired = jsonStr.trimEnd().replace(/,\s*$/, "") + stack.reverse().join("");
        data = JSON.parse(repaired);
      }

      sessionStorage.setItem("mealPlan", JSON.stringify(data));
      localStorage.setItem("mealPlan", JSON.stringify(data));
      localStorage.setItem("userAnswers", JSON.stringify(input));
      router.push("/result");
    } catch (err) {
      setErrorMessage(
        err instanceof Error && err.message.includes("アクセスが集中")
          ? err.message
          : "しばらくしてからもう一度お試しください"
      );
      setIsLoading(false);
    }
  };

  // ローディング画面
  if (isLoading) {
    return <LoadingScreen />;
  }

  // エラー時のリトライ画面
  if (errorMessage) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
        <p className="text-gray-600 text-lg font-medium">食事プランの生成に失敗しました</p>
        <p className="text-gray-400 text-sm">{errorMessage}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {lastInput && (
            <button
              onClick={() => handleSubmit(lastInput)}
              className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              もう一度試す
            </button>
          )}
          <button
            onClick={() => setErrorMessage(null)}
            className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
          >
            最初からやり直す
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <StepForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
