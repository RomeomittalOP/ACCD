"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { useRef, useState } from "react";
import { events } from "@/lib/data";

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="events" ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <motion.div
        style={{ y }}
        className="absolute -right-32 top-20 w-[600px] h-[600px] rounded-full bg-sky-400/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow">Signature Events</div>
              <h2 className="heading-lg mt-4 max-w-2xl">
                Evenings that <span className="gradient-text">define an industry</span>
              </h2>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-silver-300/70"
          >
            From founders' tributes to black-tie balls, every ACCD evening is
            curated for connection, recognition and quiet prestige.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <EventCard key={e.title} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: typeof events[number]; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -8 }}
      className="group glass-card relative h-[440px] flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={event.image}
          alt={event.title}
          animate={{ scale: hover ? 1.12 : 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        <div className="absolute top-4 left-4 chip">{event.tag}</div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-white/80 glass rounded-full px-3 py-1.5">
          <Calendar size={12} />
          {event.date}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl text-white">{event.title}</h3>
        <p className="mt-2 text-sm text-silver-300/70 leading-relaxed flex-1">
          {event.desc}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-300/70">
            Members only
          </span>
          <motion.span
            animate={{ x: hover ? 4 : 0 }}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-300 group-hover:bg-gradient-to-br group-hover:from-royal-500 group-hover:to-sky-400 group-hover:text-white transition"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </div>
      </div>

      {/* hover glow */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.35), rgba(0,87,255,0.15), transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
        }}
      />
    </motion.article>
  );
}
