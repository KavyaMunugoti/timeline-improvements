// src/Components/BeforeAfter.jsx
import React from "react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row lg:px-8">
        {/* Text */}
        <motion.div
          className="md:w-1/3 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Before &amp; After
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            See how a dated space turns into a calm, bright home.
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            These are real project videos from Timeline Improvements LLC — not stock footage.
            We protect your home, coordinate trades and obsess over the finishing details.
          </p>
        </motion.div>

        {/* Videos */}
        <motion.div
          className="md:w-2/3 grid gap-4 md:grid-cols-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <VideoCard
            label="Before"
            description="Original layout and finishes before renovation."
            src="/Videos/VID-20251207-WA0001.mp4"
          />
          <VideoCard
            label="After"
            description="Completed space with new floors, paint and lighting."
            src="/Videos/VID-20251207-WA0003.mp4"
          />
        </motion.div>
      </div>
    </section>
  );
}

function VideoCard({ label, description, src }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg">
      <div className="relative">
        <video
          src={src}
          className="h-56 w-full object-cover sm:h-64"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-emerald-300">
          {label}
        </span>
      </div>
      <div className="p-3 text-xs text-slate-300">
        {description}
      </div>
    </div>
  );
}
