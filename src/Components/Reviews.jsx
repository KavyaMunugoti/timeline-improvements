import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "New York, NY",
    text:
      "Timeline Improvements handled our kitchen renovation with an incredible level of care. The finishes are flawless, and the process felt calm and organized from day one.",
  },
  {
    name: "David R.",
    location: "Hoboken, NJ",
    text:
      "Professional, detail-oriented, and respectful of our building rules. Communication was clear, and the final result exceeded expectations.",
  },
  {
    name: "Anita P.",
    location: "New York, NY",
    text:
      "They guided us through design choices without pressure and stayed within budget. The bathroom looks timeless and beautifully executed.",
  },
  {
    name: "Michael L.",
    location: "Brooklyn, NY",
    text:
      "This is how renovations should feel — predictable, clean, and well-managed. The daily updates made a huge difference.",
  },
  {
    name: "Jessica T.",
    location: "Jersey City Heights, NJ",
    text:
      "Our full apartment renovation feels magazine-ready. The craftsmanship and attention to detail truly stand out.",
  },
  {
    name: "Carlos D.",
    location: "North Bergen, NJ",
    text:
      "Reliable and honest from the first walk-through to final handover. I would confidently recommend them to anyone.",
  },
];

export default function Reviews() {
  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">
            Client Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Thoughtful work.
            <br />
            Trusted by homeowners.
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="relative rounded-3xl border border-slate-800/80 
                         bg-slate-900/50 backdrop-blur-xl p-8 
                         shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
                         hover:border-emerald-400/40 transition"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 text-7xl font-serif text-slate-700/40">
                “
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-emerald-400/90">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {review.text}
              </p>

              {/* Author */}
              <div className="border-t border-slate-800 pt-4">
                <div className="text-sm font-medium text-slate-100">
                  {review.name}
                </div>
                <div className="text-xs text-slate-400">
                  {review.location}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
