// src/Components/Services.jsx
import React from "react";
import { Hammer, Paintbrush, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Service items
const services = [
  {
    title: "Full Renovations",
    description: "Kitchens, bathrooms & full-gut remodels.",
    icon: Hammer,
  },
  {
    title: "Cosmetic Upgrades",
    description: "Painting, flooring, lighting, trim work.",
    icon: Paintbrush,
  },
  {
    title: "Repairs & Maintenance",
    description: "Drywall, plumbing, electrical fixes.",
    icon: Wrench,
  },
];

// Fade-in animation
const cardFade = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 text-white overflow-hidden">

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-400/10 blur-xl"
            style={{
              width: Math.random() * 12 + 6,
              height: Math.random() * 12 + 6,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* HEADING */}
        <motion.h2
          className="mb-12 text-4xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>

        {/* CARD GRID */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div key={index} variants={cardFade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.35}
                  glareBorderRadius="20px"
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  perspective={900}
                  scale={1.02}
                  transitionSpeed={800}
                  className="rounded-2xl"
                >
                  <div
                    className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl 
                    backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40"
                  >

                    {/* GLOW TRAIL */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-300/10 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* ICON WITH RIPPLE ANIMATION */}
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-400/10"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon className="h-7 w-7 text-emerald-300" />
                    </motion.div>

                    {/* TITLE */}
                    <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
