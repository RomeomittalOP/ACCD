"use client";
import { motion } from "framer-motion";
import {
  Network,
  LineChart,
  Sparkles,
  Users,
  Award,
  Rocket,
} from "lucide-react";
import { memberBenefits } from "@/lib/data";

const iconMap: Record<string, any> = {
  Network,
  LineChart,
  Sparkles,
  Users,
  Award,
  Rocket,
};

export default function MembersExperience() {
  return (
    <section id="membership" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-royal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">The Member Experience</div>
            <h2 className="heading-lg mt-4">
              An invitation into{" "}
              <span className="gradient-text">India's most influential</span>
              <br /> aviation network
            </h2>
            <p className="body-lg mt-6">
              Six pillars define what it means to be part of ACCD — designed for
              the leaders shaping the next era of global air cargo.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {memberBenefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Sparkles;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6 }}
                className="group glass-card p-7 relative overflow-hidden"
              >
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-500/30 to-sky-400/20 border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-sky-300" />
                  <span className="absolute inset-0 rounded-2xl bg-sky-400/0 group-hover:bg-sky-400/10 transition" />
                </div>
                <h3 className="font-display text-xl text-white">{b.title}</h3>
                <p className="mt-3 text-sm text-silver-300/70 leading-relaxed">
                  {b.text}
                </p>

                {/* corner accent */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-royal-500/0 group-hover:bg-royal-500/20 blur-2xl transition-all duration-700" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
