"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-royal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">In Their Words</div>
            <h2 className="heading-lg mt-4">
              The voices of <span className="gradient-text">our members</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Auto-moving slider */}
      <div className="relative overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10" />

        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <article
              key={i}
              className="glass-card w-[420px] md:w-[480px] p-7 md:p-8 shrink-0 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-sky-400/30" />
              <p className="text-silver-300/90 leading-relaxed text-[15px]">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-sky-400/40"
                  />
                  <span className="absolute -inset-1 rounded-full bg-sky-400/20 blur-md -z-10" />
                </div>
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-xs text-sky-300/70 mt-0.5">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
