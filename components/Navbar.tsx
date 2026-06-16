"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#membership", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#calendar", label: "Calendar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-navy-950/70 backdrop-blur-2xl border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-500 to-sky-400 shadow-glow flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M2 12l8 1 4 9 2-1-2-8 5-1 2 3 2-1-2-5 2-5-2-1-2 3-5-1 2-8-2-1-4 9-8 1z" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-xl bg-sky-400/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base tracking-[0.3em] text-white">ACCD</span>
            <span className="text-[10px] tracking-[0.2em] text-sky-300/70 uppercase hidden sm:block">
              Est. 1977 · Delhi
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full glass">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-silver-300/80 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href="#join" className="btn-primary !py-2.5 !px-5 text-sm shine">
            <span className="relative z-10">Become a Member</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="mx-6 mt-3 p-5 rounded-2xl glass-strong flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm rounded-lg text-silver-300/90 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a href="#join" onClick={() => setOpen(false)} className="btn-primary mt-2 !py-2.5 text-sm">
            Become a Member
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
