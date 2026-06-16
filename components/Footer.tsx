"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  ["About ACCD", "#about"],
  ["Signature Events", "#events"],
  ["Membership", "#membership"],
  ["Gallery", "#gallery"],
  ["Calendar", "#calendar"],
];

const programs = [
  ["Founders Day", "#events"],
  ["Annual Ball", "#events"],
  ["Speaker Lunches", "#events"],
  ["Industry Seminars", "#events"],
  ["Community Outreach", "#events"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-[#020714]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-royal-500 to-sky-400 shadow-glow flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M2 12l8 1 4 9 2-1-2-8 5-1 2 3 2-1-2-5 2-5-2-1-2 3-5-1 2-8-2-1-4 9-8 1z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-lg tracking-[0.3em] text-white">ACCD</div>
                  <div className="text-[10px] tracking-[0.2em] text-sky-300/70 uppercase">
                    Air Cargo Club of Delhi
                  </div>
                </div>
              </div>

              <p className="mt-6 text-silver-300/70 max-w-md leading-relaxed">
                Since 1977, ACCD has united aviation leaders, logistics
                executives and air cargo pioneers into India's most prestigious
                membership organisation.
              </p>

              {/* Newsletter */}
              <div className="mt-8 glass-card p-5">
                <div className="text-sm text-white font-medium">
                  The ACCD Briefing
                </div>
                <div className="text-xs text-silver-300/60 mt-1">
                  Monthly intelligence for members and friends of ACCD.
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSent(true);
                  }}
                  className="mt-4 flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-sky-400/50 transition"
                >
                  <Mail size={14} className="text-sky-300/70 shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@company.com"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-silver-300/40 text-white"
                  />
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-royal-500 to-sky-400 text-sm text-white shadow-glow hover:shadow-glow-lg transition">
                    {sent ? "Sent" : "Subscribe"}
                    {!sent && <ArrowRight size={14} />}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] text-sky-300/80">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-silver-300/80 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] text-sky-300/80">
              Programs
            </h4>
            <ul className="mt-5 space-y-3">
              {programs.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-silver-300/80 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-sky-300/80">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-silver-300/80">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-sky-300/70 shrink-0" />
                <span>
                  ACCD Secretariat,<br />
                  Cargo Terminal Complex,<br />
                  IGI Airport, New Delhi 110037
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-sky-300/70" />
                <a href="mailto:secretariat@accd.in" className="hover:text-white">
                  secretariat@accd.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-sky-300/70" />
                <a href="tel:+911140000000" className="hover:text-white">
                  +91 11 4000 0000
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-silver-300/80 hover:text-white hover:border-sky-400/40 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 pb-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-silver-300/50">
          <div>
            © {new Date().getFullYear()} Air Cargo Club of Delhi. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Code of Conduct</a>
          </div>
        </div>
      </div>

      {/* huge ACCD watermark */}
      <div className="relative overflow-hidden">
        <div className="font-display text-[20vw] leading-none font-semibold text-center tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-white/[0.04] to-transparent select-none pointer-events-none -mb-[4vw]">
          ACCD
        </div>
      </div>
    </footer>
  );
}
