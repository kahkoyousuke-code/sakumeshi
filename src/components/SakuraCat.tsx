interface SakuraCatProps {
  className?: string;
}

export default function SakuraCat({ className = "w-32 h-32" }: SakuraCatProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="さくらねこのマスコット"
    >
      {/* 体 */}
      <ellipse cx="100" cy="140" rx="55" ry="45" fill="#f9c8d8" />

      {/* 頭 */}
      <circle cx="100" cy="88" r="52" fill="#f9c8d8" />

      {/* 耳（左） */}
      <polygon points="55,50 40,18 78,40" fill="#f9c8d8" />
      <polygon points="57,48 45,25 74,42" fill="#f4a0bb" />

      {/* 耳（右） */}
      <polygon points="145,50 160,18 122,40" fill="#f9c8d8" />
      <polygon points="143,48 155,25 126,42" fill="#f4a0bb" />

      {/* 顔 - 目（左） */}
      <ellipse cx="82" cy="88" rx="8" ry="9" fill="#4a2c2a" />
      <circle cx="84" cy="85" r="2.5" fill="white" />

      {/* 顔 - 目（右） */}
      <ellipse cx="118" cy="88" rx="8" ry="9" fill="#4a2c2a" />
      <circle cx="120" cy="85" r="2.5" fill="white" />

      {/* 鼻 */}
      <ellipse cx="100" cy="100" rx="4" ry="3" fill="#f4a0bb" />

      {/* 口 */}
      <path d="M 94 104 Q 100 110 106 104" stroke="#d4607a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ひげ（左） */}
      <line x1="62" y1="100" x2="88" y2="102" stroke="#d4607a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="60" y1="106" x2="87" y2="106" stroke="#d4607a" strokeWidth="1.2" strokeLinecap="round" />

      {/* ひげ（右） */}
      <line x1="138" y1="100" x2="112" y2="102" stroke="#d4607a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="140" y1="106" x2="113" y2="106" stroke="#d4607a" strokeWidth="1.2" strokeLinecap="round" />

      {/* 桜の花びら（頭上） */}
      <g transform="translate(100, 38) rotate(0)">
        <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f4a0bb" opacity="0.9" />
        <ellipse cx="9.5" cy="-3" rx="5" ry="8" fill="#f4a0bb" opacity="0.9" transform="rotate(72)" />
        <ellipse cx="5.9" cy="8" rx="5" ry="8" fill="#f4a0bb" opacity="0.9" transform="rotate(144)" />
        <ellipse cx="-5.9" cy="8" rx="5" ry="8" fill="#f4a0bb" opacity="0.9" transform="rotate(216)" />
        <ellipse cx="-9.5" cy="-3" rx="5" ry="8" fill="#f4a0bb" opacity="0.9" transform="rotate(288)" />
        <circle cx="0" cy="0" r="3" fill="#f6c90e" />
      </g>

      {/* しっぽ */}
      <path d="M 148 165 Q 175 150 170 130 Q 165 115 155 125" stroke="#f4a0bb" strokeWidth="10" fill="none" strokeLinecap="round" />
    </svg>
  );
}
