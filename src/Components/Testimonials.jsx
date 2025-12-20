// src/Components/Reviews.jsx
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "A. Cohen – Park Slope",
    text: "They handled everything with the building, protected the elevator, and kept us updated with photos while we were out of town.",
  },
  {
    name: "J. Alvarez – Upper West Side",
    text: "The schedule was clear and they actually stuck to it. The punchlist was handled quickly and the bathroom looks exactly like the renderings.",
  },
  {
    name: "M. Lee – Downtown Brooklyn",
    text: "Communication was the biggest difference. Every question had a quick answer and changes were priced before any work happened.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="border-t border-slate-900 bg-slate-950 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Reviews
          </p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            What clients say after move-in.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs"
            >
              <Quote className="mb-2 h-4 w-4 text-emerald-300" />
              <p className="text-slate-200">{r.text}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {r.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
