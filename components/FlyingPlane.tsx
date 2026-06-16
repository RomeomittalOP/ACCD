"use client";
import { motion } from "framer-motion";

function Plane({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>
      <path
        d="M2 34l22-2 8-18 4 1-3 16 14-2 5-7 3 1-3 9 3 9-3 1-5-7-14-2 3 16-4 1-8-18-22-2z"
        fill="url(#pg)"
        opacity="0.95"
      />
    </svg>
  );
}

export default function FlyingPlane() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Plane 1 */}
      <motion.div
        initial={{ x: "-15vw", y: "18vh", opacity: 0 }}
        animate={{ x: "115vw", y: "10vh", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute"
      >
        <div className="relative">
          <Plane size={56} className="drop-shadow-[0_0_18px_rgba(125,211,252,0.6)]" />
          {/* contrail */}
          <div className="absolute top-1/2 right-full h-[2px] w-[180px] -translate-y-1/2 bg-gradient-to-l from-sky-300/80 to-transparent blur-[1px]" />
        </div>
      </motion.div>

      {/* Plane 2 — higher, smaller, slower */}
      <motion.div
        initial={{ x: "-15vw", y: "55vh", opacity: 0 }}
        animate={{ x: "115vw", y: "45vh", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear", delay: 12 }}
        className="absolute"
      >
        <div className="relative">
          <Plane size={34} className="opacity-70" />
          <div className="absolute top-1/2 right-full h-px w-[120px] -translate-y-1/2 bg-gradient-to-l from-white/40 to-transparent" />
        </div>
      </motion.div>

      {/* Soft clouds */}
      <motion.div
        initial={{ x: "-20vw" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] w-[260px] h-[80px] rounded-full bg-white/[0.04] blur-2xl"
      />
      <motion.div
        initial={{ x: "-20vw" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear", delay: 20 }}
        className="absolute top-[60%] w-[380px] h-[100px] rounded-full bg-white/[0.03] blur-3xl"
      />
    </div>
  );
}
