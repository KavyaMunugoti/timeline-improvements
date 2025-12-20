// src/Components/Process.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "01. Walk-through & scope",
    body: "We meet on-site (or virtually), listen to what you want to change, review existing conditions and talk through any building requirements.",
  },
  {
    title: "02. Design & transparent pricing",
    body: "We help refine the scope, suggest materials that fit your budget, and provide a clear, line-by-line proposal so you know exactly what’s included.",
  },
  {
    title: "03. Permits, board approvals & scheduling",
    body: "We coordinate with building management, secure required permits and line up trades so your project moves forward without surprises.",
  },
  {
    title: "04. Construction & daily updates",
    body: "We protect floors and common areas, keep a tight, predictable schedule and share updates, photos and decisions as we go.",
  },
  {
    title: "05. Punchlist & final walkthrough",
    body: "We walk the finished space with you, address every item on your list and make sure the details feel right before we close out.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-slate-900 bg-slate-950 py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.2fr)] md:items-start lg:px-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            A calm, predictable process
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Renovations don’t have to feel chaotic. We keep each phase structured
            and transparent so you always know{" "}
            <span className="text-slate-50">
              what’s happening, who’s on site,
            </span>{" "}
            and when your home will be put back together.
          </p>
        </motion.div>

        <motion.ol
          className="space-y-4"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4"
            >
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
