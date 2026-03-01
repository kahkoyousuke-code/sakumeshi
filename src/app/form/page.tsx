"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepForm from "@/components/StepForm";
import { UserAnswers } from "@/lib/types";

export default function FormPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastInput, setLastInput] = useState<UserAnswers | null>(null);

  const handleSubmit = async (input: UserAnswers) => {
    setIsLoading(true);
    setHasError(false);
    setLastInput(input);

    try {
      console.log("[FormPage] API送信データ:", JSON.stringify(input));
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!res.ok) throw new Error("APIエラーが発生しました");
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
      const data = JSON.parse(accumulated);
      sessionStorage.setItem("mealPlan", JSON.stringify(data));
      router.push("/result");
    } catch (err) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  // ローディング画面
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="h-12 w-12 rounded-full border-4 border-[var(--primary)] border-t-transparent animate-spin" />
        <p className="text-gray-500 animate-pulse text-lg">食事プランを生成中...</p>
        <p className="text-gray-400 text-sm">AIが7日分の献立を作成しています</p>
      </div>
    );
  }

  // パースエラー時のリトライ画面
  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
        <p className="text-gray-600 text-lg font-medium">食事プランの生成に失敗しました</p>
        <p className="text-gray-400 text-sm">しばらくしてからもう一度お試しください</p>
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
            onClick={() => setHasError(false)}
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
