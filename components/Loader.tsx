"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
        >
          <div className="absolute inset-0 aurora opacity-40" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative w-24 h-24">
              <motion.span
                className="absolute inset-0 rounded-full border border-sky-400/40"
                animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border border-royal-500/50"
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-royal-500 to-sky-400 shadow-glow flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M2 12l8 1 4 9 2-1-2-8 5-1 2 3 2-1-2-5 2-5-2-1-2 3-5-1 2-8-2-1-4 9-8 1z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display text-xl tracking-[0.4em] text-white">ACCD</div>
              <div className="mt-2 text-[10px] tracking-[0.3em] text-sky-300/70 uppercase">
                Air Cargo Club of Delhi
              </div>
            </div>
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
