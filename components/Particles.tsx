"use client";
import { useEffect, useMemo, useState } from "react";

export default function Particles({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 0.5,
        d: Math.random() * 8 + 6,
        delay: Math.random() * 6,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-sky-300/70 shadow-[0_0_10px_rgba(125,211,252,0.7)]"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            animation: `float ${d.d}s ease-in-out ${d.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
