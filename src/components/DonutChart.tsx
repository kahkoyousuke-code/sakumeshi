"use client";

import { PFCBalance } from "@/lib/types";

interface DonutChartProps {
  pfc: PFCBalance;
}

const COLORS = {
  protein: "#4CAF50",
  fat: "#81C784",
  carbs: "#2E7D32",
};

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default function DonutChart({ pfc }: DonutChartProps) {
  const proteinCal = pfc.protein * 4;
  const fatCal = pfc.fat * 9;
  const carbsCal = pfc.carbs * 4;
  const total = proteinCal + fatCal + carbsCal || 1;

  const segments = [
    { label: "タンパク質", value: proteinCal, grams: pfc.protein, color: COLORS.protein },
    { label: "脂質", value: fatCal, grams: pfc.fat, color: COLORS.fat },
    { label: "炭水化物", value: carbsCal, grams: pfc.carbs, color: COLORS.carbs },
  ];

  const cx = 100;
  const cy = 100;
  const r = 75;
  const innerR = 48;

  let currentAngle = 0;
  const arcs = segments.map((seg) => {
    const angle = (seg.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    return { ...seg, startAngle, endAngle: currentAngle };
  });

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <svg width="200" height="200" viewBox="0 0 200 200" className="shrink-0">
        {arcs.map((arc) => (
          <path
            key={arc.label}
            d={describeArc(cx, cy, r, arc.startAngle, arc.endAngle)}
            stroke={arc.color}
            strokeWidth={innerR}
            fill="none"
            strokeLinecap="butt"
          />
        ))}
        {/* 中央テキスト */}
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize="13" fill="#555" fontWeight="bold">
          {pfc.calories}
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize="11" fill="#888">
          kcal
        </text>
      </svg>

      {/* 凡例 */}
      <div className="flex flex-col gap-3 text-sm">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-gray-600 w-20">{seg.label}</span>
            <span className="font-semibold text-gray-800">{seg.grams}g</span>
            <span className="text-gray-400 text-xs">
              ({Math.round((seg.value / total) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
