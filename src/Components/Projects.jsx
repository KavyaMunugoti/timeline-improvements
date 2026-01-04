// src/Components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Open-plan Living & Hall Way",
    location: "Modern condo",
    scope: "Flooring · painting · trim · lighting",
    src: "/Videos/VID-20251207-WA0004.mp4",
  },
  {
    title: "Bright, Minimal BedRoom and BathRoom Upgrade",
    location: "Family apartment",
    scope: "Cabinets · counters · backsplash · appliances",
    src: "/Videos/VID-20251207-WA0006.mp4",
  },
  {
    title: "Full Kitchen Renovation",
    location: "Entry & circulation",
    scope: "Doors · paint · hardware · lighting",
    src: "/Videos/VID-20251207-WA0009.mp4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Projects
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              A few recent renovations.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            Every building and board is different. We work through logistics
            early so construction goes as smoothly as possible.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <video
                src={project.src}
                className="h-52 w-full object-cover sm:h-56"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="flex flex-1 flex-col p-4 text-xs text-slate-300">
                <h3 className="mb-1 text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {project.location}
                </p>
                <p className="mb-3 text-xs">{project.scope}</p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200">
                  View more in the gallery below
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
