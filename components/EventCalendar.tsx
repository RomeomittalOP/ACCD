"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar as CalIcon } from "lucide-react";
import { upcomingEvents } from "@/lib/data";

export default function EventCalendar() {
  return (
    <section id="calendar" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">Upcoming Calendar</div>
            <h2 className="heading-lg mt-4">
              The year ahead, <span className="gradient-text">already in motion</span>
            </h2>
          </motion.div>
          <motion.a
            href="#join"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="btn-secondary"
          >
            <CalIcon size={16} />
            Sync calendar
          </motion.a>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="group glass-card p-5 md:p-7 flex flex-col md:flex-row md:items-center gap-6 relative"
            >
              {/* Date */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-1 md:w-32 md:border-r md:border-white/10 md:pr-6">
                <div className="font-display text-4xl md:text-5xl gradient-text">{e.day}</div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-sky-300/80">
                    {e.month}
                  </div>
                  <div className="text-xs text-silver-300/50 mt-0.5">{e.year}</div>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1">
                <h3 className="font-display text-lg md:text-xl text-white">{e.title}</h3>
                <p className="mt-2 text-sm text-silver-300/70 max-w-2xl leading-relaxed">
                  {e.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-sky-300/70">
                  <MapPin size={12} />
                  {e.location}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:bg-gradient-to-r hover:from-royal-500 hover:to-sky-400 hover:border-transparent transition shrink-0"
              >
                Register
                <ArrowRight size={14} />
              </a>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 rounded-r-full bg-gradient-to-b from-sky-400 to-royal-500 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
