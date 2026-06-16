"use client";
import { motion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import WorldMap from "./WorldMap";
import FlyingPlane from "./FlyingPlane";
import Particles from "./Particles";
import { stats } from "@/lib/data";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 aurora opacity-70" />
      <WorldMap />
      <FlyingPlane />
      <Particles count={60} />
      <div className="noise" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="chip mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          A members-only aviation collective · Est. 1977
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="heading-xl max-w-5xl"
        >
          Connecting India's{" "}
          <span className="gradient-text">Air Cargo Legacy</span>
          <br />
          Since <span className="gradient-text-blue">1977</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="body-lg mt-6 max-w-2xl"
        >
          Where aviation leaders, logistics experts, and industry professionals
          come together. A private fellowship that has shaped Indian air cargo
          for nearly half a century.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#join" className="btn-primary shine">
            <span className="relative z-10">Become a Member</span>
            <ArrowRight size={18} className="relative z-10" />
          </a>
          <a href="#about" className="btn-secondary">
            <Plane size={16} />
            Explore ACCD
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
          }}
          className="relative mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
              }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 md:p-7 shine group"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
              <div className="font-display text-3xl md:text-5xl font-semibold gradient-text">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white font-medium">{s.label}</div>
              <div className="text-xs text-sky-300/60 mt-1 tracking-wide">{s.sub}</div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-sky-400/30 transition" />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-silver-300/50"
        >
          <span className="w-10 h-px bg-silver-300/30" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
