// src/Components/VideoGallery.jsx
import React from "react";
import { motion } from "framer-motion";

const videoFiles = [
  "VID-20251207-WA0001.mp4",
  "VID-20251207-WA0002.mp4",
  "VID-20251207-WA0003.mp4",
  "VID-20251207-WA0004.mp4",
  "VID-20251207-WA0005.mp4",
  "VID-20251207-WA0006.mp4",
  "VID-20251207-WA0007.mp4",
  "VID-20251207-WA0008.mp4",
  "VID-20251207-WA0009.mp4",
];

export default function VideoGallery() {
  return (
    <section id="gallery" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 space-y-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Video Gallery
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Real footage from Timeline Improvements LLC projects.
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            Short clips showing flooring, painting, kitchen and hallway work.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoFiles.map((file, index) => (
            <motion.div
              key={file}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <video
                src={`/Videos/${file}`}
                className="h-52 w-full object-cover sm:h-56"
                controls
                playsInline
              />
              <div className="p-3 text-[11px] text-slate-300">
                Clip {index + 1} – {file}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
