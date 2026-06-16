"use client";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-royal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?auto=format&fit=crop&w=1600&q=80"
                alt="Air cargo operations"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[1.8s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 glass-strong rounded-2xl px-5 py-4 max-w-[200px]"
              >
                <div className="text-[10px] tracking-[0.25em] uppercase text-sky-300/80">
                  Heritage
                </div>
                <div className="font-display text-2xl mt-1 text-white">47 Years</div>
                <div className="text-xs text-silver-300/70 mt-1">
                  of building India's air cargo community
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 glass-strong rounded-2xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-500 to-sky-400 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M12 2l3.5 7 7.5 1-5.5 5 1.5 7.5L12 19l-7 3.5L6.5 15 1 10l7.5-1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-silver-300/70">Recognised by</div>
                    <div className="text-sm text-white">Global Cargo Federation</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Backdrop accent */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-royal-500/20 via-transparent to-sky-400/20 blur-2xl" />
          </motion.div>

          {/* Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow">About ACCD</div>
              <h2 className="heading-lg mt-4">
                Building <span className="gradient-text">Relationships</span>
                <br /> Beyond Cargo
              </h2>
              <p className="body-lg mt-6 max-w-xl">
                For nearly half a century, ACCD has stood as the most respected
                fellowship of air cargo professionals in India — a quiet but
                powerful network where leaders are made, friendships are forged
                and the future of an industry is shaped.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="mt-10 relative pl-8">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-sky-400/80 via-royal-500/40 to-transparent" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-sky-400 to-royal-500 shadow-glow ring-4 ring-navy-950" />
                  <div className="font-display text-sm tracking-[0.3em] text-sky-300/80 uppercase">
                    {t.year}
                  </div>
                  <div className="font-display text-xl text-white mt-1">{t.title}</div>
                  <div className="text-sm text-silver-300/70 mt-2 max-w-md leading-relaxed">
                    {t.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
