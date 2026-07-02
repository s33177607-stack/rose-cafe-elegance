import { useMemo } from "react";

export function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        size: 10 + Math.random() * 18,
        opacity: 0.4 + Math.random() * 0.5,
        rotate: Math.random() * 360,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden>
      {petals.map((p, i) => (
        <svg
          key={i}
          className="animate-petal absolute"
          style={{
            left: `${p.left}%`,
            top: "-10vh",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 4px 12px rgba(233,30,99,0.35))",
          }}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 3c5 4 9 8 9 13a9 9 0 1 1-18 0c0-5 4-9 9-13z"
            fill="url(#pg)"
          />
          <defs>
            <linearGradient id="pg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#F8D6E7" />
              <stop offset="1" stopColor="#E91E63" />
            </linearGradient>
          </defs>
        </svg>
      ))}
    </div>
  );
}