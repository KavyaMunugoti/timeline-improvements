// src/Components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Hammer, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-24 sm:px-6 md:flex-row md:pt-28 lg:px-8">
        {/* Left */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Home &amp; Apartment Renovations
          </p>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Renovations that feel{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
              calm, clean &amp; carefully done.
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            From pre-war apartments to modern condos, we handle kitchens,
            bathrooms and full-gut renovations with clear communication,
            tight scheduling and finish work that actually looks like the
            photos and videos you saved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Book a free walk-through
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-200 underline-offset-4 hover:text-emerald-300 hover:underline"
            >
              View recent projects
            </a>
          </div>

          <div className="mt-4 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
            <Highlight icon={<Hammer size={16} />} label="Full-service general contracting" />
            <Highlight icon={<ShieldCheck size={16} />} label="Licensed, Insured & COI-ready" />
            <Highlight icon={<MapPin size={16} />} label="Serving NYC & nearby areas" />
          </div>
        </motion.div>

        {/* Right: hero video */}
        <motion.div
          className="flex-1 w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl">
            <video
              src="/Videos/VID-20251207-WA0007.mp4"
              className="h-64 w-full object-cover sm:h-80 md:h-96"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100">
              <div>
                <p className="font-semibold">Recent full-apartment renovation</p>
                <p className="text-[11px] text-slate-300">
                  New floors, lighting, kitchen and paint – completed on a tight schedule.
                </p>
              </div>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                Real project footage
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Highlight({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/70 px-3 py-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-emerald-300">
        {icon}
      </span>
      <span className="text-xs text-slate-200">{label}</span>
    </div>
  );
}
