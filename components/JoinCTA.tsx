"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FlyingPlane from "./FlyingPlane";
import Particles from "./Particles";

export default function JoinCTA() {
  return (
    <section id="join" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 aurora opacity-50" />
      <FlyingPlane />
      <Particles count={30} />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-strong relative rounded-[2.5rem] p-10 md:p-16 overflow-hidden"
        >
          {/* glow ring */}
          <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-r from-sky-400/30 via-royal-500/30 to-sky-400/30 blur-xl -z-10 animate-pulse-glow" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="chip mx-auto mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Membership 2026 · By invitation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Become part of Delhi's <br />
            <span className="gradient-text">Air Cargo Legacy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-silver-300/80 max-w-2xl mx-auto"
          >
            Join a private fellowship of India's most respected aviation
            leaders. Membership at ACCD is the most quietly powerful credential
            in Indian air cargo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#" className="btn-primary shine">
              <span className="relative z-10">Apply For Membership</span>
              <ArrowRight size={18} className="relative z-10" />
            </a>
            <a href="#about" className="btn-secondary">
              Speak with a member
            </a>
          </motion.div>

          {/* corner ornaments */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-sky-400/30 rounded-tl-3xl" />
          <div className="absolute top-6 right-6 w-16 h-16 border-r border-t border-sky-400/30 rounded-tr-3xl" />
          <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-sky-400/30 rounded-bl-3xl" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-sky-400/30 rounded-br-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
