"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FORM_STEPS, TOTAL_STEPS } from "@/lib/constants";
import { UserAnswers, Goal } from "@/lib/types";
import { assessPace } from "@/lib/nutrition";

interface StepFormProps {
  onSubmit: (input: UserAnswers) => void;
  isLoading: boolean;
}

export default function StepForm({ onSubmit, isLoading }: StepFormProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[] | number>>({});

  const currentStep = FORM_STEPS[step];

  const handleAnswer = (value: string | string[] | number) => {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: value }));
  };

  const handleMultiSelect = (value: string) => {
    const current = (answers[currentStep.id] as string[]) || [];
    // 「特になし」(none) は他の選択肢と排他にする
    if (value === "none") {
      handleAnswer(current.includes("none") ? [] : ["none"]);
      return;
    }
    if (current.includes(value)) {
      handleAnswer(current.filter((v) => v !== value));
    } else {
      handleAnswer([...current.filter((v) => v !== "none"), value]);
    }
  };

  // 目標体重・期間の妥当性（減量/増量が無理なペースでないか）
  const pace = assessPace(
    Number(answers.currentWeight),
    Number(answers.targetWeight),
    answers.period as UserAnswers["period"],
    answers.goal as Goal
  );

  const canProceed = () => {
    const val = answers[currentStep.id];
    if (currentStep.type === "multiselect") return Array.isArray(val) && val.length > 0;
    if (currentStep.type === "number") return !!val && Number(val) > 0;
    return !!val;
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      // 数値フィールドを明示的に Number() 変換してから送信
      // （文字列が混入しても "53" + "53" = "5353" にならないようにする）
      const sanitized = {
        ...answers,
        age: Number(answers.age),
        height: Number(answers.height),
        currentWeight: Number(answers.currentWeight),
        targetWeight: Number(answers.targetWeight),
      };
      onSubmit(sanitized as unknown as UserAnswers);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  return (
    <div className="space-y-6">
      {/* プログレスバー */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-400">
          <span>ステップ {step + 1} / {TOTAL_STEPS}</span>
          <span>{Math.round(((step + 1) / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="w-full bg-green-100 rounded-full h-2">
          <motion.div
            className="bg-[var(--primary)] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* 質問カード */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-6 space-y-5"
        >
          <h2 className="text-xl font-bold text-gray-800">{currentStep.question}</h2>
          {currentStep.description && (
            <p className="-mt-3 text-sm text-gray-400">{currentStep.description}</p>
          )}

          {/* radio */}
          {currentStep.type === "radio" && (
            <div className="flex flex-col gap-2">
              {currentStep.options?.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className={`w-full py-3 px-4 rounded-xl border-2 text-left transition-all ${
                    answers[currentStep.id] === opt.value
                      ? "border-[var(--primary)] bg-green-50 text-[var(--primary)]"
                      : "border-gray-200 text-gray-600 hover:border-green-200"
                  }`}
                >
                  <span className="font-medium">{opt.label}</span>
                  {opt.description && (
                    <span className="block text-xs mt-0.5 opacity-70">{opt.description}</span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* select */}
          {currentStep.type === "select" && (
            <select
              className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-700 focus:border-[var(--primary)] outline-none"
              value={(answers[currentStep.id] as string) || ""}
              onChange={(e) => handleAnswer(e.target.value)}
            >
              <option value="">選択してください</option>
              {currentStep.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {/* number */}
          {currentStep.type === "number" && (
            <div className="flex items-center gap-2">
              <input
                type="number"
                inputMode="decimal"
                className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-700 focus:border-[var(--primary)] outline-none text-lg"
                placeholder={currentStep.placeholder}
                value={(answers[currentStep.id] as string) || ""}
                onChange={(e) => {
                  // スマホIMEで onChange が複数回発火しても前の値に追加せず
                  // e.target.value をそのままセット（数値以外の文字は除去）
                  const cleaned = e.target.value.replace(/[^0-9.]/g, "");
                  setAnswers((prev) => ({ ...prev, [currentStep.id]: cleaned }));
                }}
                min={0}
              />
              {currentStep.unit && (
                <span className="text-gray-500 font-medium">{currentStep.unit}</span>
              )}
            </div>
          )}

          {/* 目標ペースの注意喚起（期間ステップで表示） */}
          {currentStep.id === "period" && pace?.isAggressive && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
              ⚠️ この期間で {Math.abs(Number(answers.currentWeight) - Number(answers.targetWeight))}kg は
              <span className="font-semibold">週{pace.needWeekly}kg</span>ペースになり、体への負担が大きい可能性があります。
              無理のないペースは<span className="font-semibold">週{pace.safeWeekly}kgまで</span>です。期間を延ばすのもおすすめです。
            </div>
          )}

          {/* multiselect */}
          {currentStep.type === "multiselect" && (
            <div className="flex flex-wrap gap-2">
              {currentStep.options?.map((opt) => {
                const selected = ((answers[currentStep.id] as string[]) || []).includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleMultiSelect(opt.value)}
                    className={`py-2 px-4 rounded-full border-2 text-sm font-medium transition-all ${
                      selected
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-gray-200 text-gray-600 hover:border-green-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ナビゲーション */}
      <div className="flex gap-3">
        {step > 0 && (
          <button
            onClick={handleBack}
            className="flex-1 py-3 border-2 border-gray-200 text-gray-500 font-semibold rounded-xl hover:border-green-200 transition-colors"
          >
            戻る
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed() || isLoading}
          className="flex-1 py-3 bg-[var(--primary)] text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {isLoading
            ? "生成中..."
            : step === TOTAL_STEPS - 1
            ? "食事プランを作る 🍱"
            : "次へ"}
        </button>
      </div>
    </div>
  );
}
