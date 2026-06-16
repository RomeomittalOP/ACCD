"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? 0 : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">Gallery Experience</div>
            <h2 className="heading-lg mt-4">
              Moments from a <span className="gradient-text">half-century</span>
              <br /> of fellowship
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-silver-300/70 max-w-sm"
          >
            Click any moment to enter our cinematic gallery — a window into the
            evenings that defined our community.
          </motion.div>
        </div>

        {/* Masonry columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.06 }}
              onClick={() => setOpen(i)}
              className="group block w-full mb-4 md:mb-5 break-inside-avoid rounded-2xl overflow-hidden relative glass"
              style={{ height: `${g.h * 0.55}px` }}
            >
              <img
                src={g.src}
                alt={g.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition">
                <div className="text-[10px] tracking-[0.25em] uppercase text-sky-300/80">
                  ACCD Archive
                </div>
                <div className="text-white text-sm font-medium mt-1">{g.title}</div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-sky-400/40 rounded-2xl transition" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Cinematic modal */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-navy-950/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              className="absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length));
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i === null ? 0 : (i + 1) % gallery.length));
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={gallery[open].src}
                alt={gallery[open].title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center">
                <div className="text-[10px] tracking-[0.3em] uppercase text-sky-300/80">
                  ACCD Archive · {open + 1} of {gallery.length}
                </div>
                <div className="font-display text-xl text-white mt-1">
                  {gallery[open].title}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
