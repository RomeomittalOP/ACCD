"use client";
import { motion } from "framer-motion";
import { cities, routes } from "@/lib/data";

// Build a curved path between two points
function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.18 - 6;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export default function WorldMap() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* faint world silhouette via dotted grid + radial mask */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,87,255,0.18),transparent_60%)]" />

      <svg
        viewBox="0 0 100 70"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0057FF" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="city-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* dotted continents suggestion */}
        <g opacity="0.4">
          {Array.from({ length: 160 }).map((_, i) => {
            const x = (i * 37) % 100;
            const y = ((i * 19) % 70);
            return (
              <circle key={i} cx={x} cy={y} r="0.18" fill="#38BDF8" opacity="0.4" />
            );
          })}
        </g>

        {/* Routes */}
        {routes.map((r, i) => {
          const d = curve(r.from[0], r.from[1], r.to[0], r.to[1]);
          const dur = 5 + (i % 3);
          return (
            <g key={i}>
              <motion.path
                id={`route-${i}`}
                d={d}
                fill="none"
                stroke="url(#route)"
                strokeWidth="0.25"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.4, delay: 0.2 + i * 0.18, ease: "easeInOut" }}
              />
              <circle r="0.55" fill="#7DD3FC" filter="url(#soft)">
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                  path={d}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${dur}s`}
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Cities */}
        {cities.map((c, i) => (
          <g key={c.name} transform={`translate(${c.x} ${c.y})`}>
            <circle r="2" fill="url(#city-glow)" />
            <motion.circle
              r="0.5"
              fill="#38BDF8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200 }}
            />
            <motion.circle
              r="0.5"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="0.1"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: [1, 3, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3 }}
            />
            {c.primary && (
              <text
                x="0"
                y="-2.5"
                fill="#7DD3FC"
                fontSize="1.6"
                textAnchor="middle"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em" }}
              >
                {c.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
