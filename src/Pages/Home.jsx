import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Renovations Built With Excellence
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            Licensed & Insured • Serving New York, New Jersey & Pennsylvania
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold"
            >
              Request a Free Quote
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border border-gray-400 hover:bg-gray-800 rounded-full font-semibold"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              title: "Full Home Renovations",
              desc: "Complete interior remodeling from demolition to finish.",
            },
            {
              title: "Kitchen Remodeling",
              desc: "Modern designs with custom cabinetry & luxury finishes.",
            },
            {
              title: "Bathroom Remodeling",
              desc: "High-end bathroom upgrades with tile, plumbing & fixtures.",
            },
            {
              title: "Flooring & Painting",
              desc: "Premium flooring installations & professional painting.",
            },
            {
              title: "Carpentry & Millwork",
              desc: "Built-ins, trims, doors, windows & custom woodwork.",
            },
            {
              title: "Electrical & Plumbing",
              desc: "Licensed, code-compliant service coordination.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <motion.img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=80"
            alt="Construction crew"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 mb-6">
              Timeline Improvements LLC is a trusted general contracting company
              specializing in residential renovations. With years of experience,
              licensed professionals, and a dedication to high-quality finishes—
              we bring your vision to life with clarity, craftsmanship, and care.
            </p>
            <a
              href="/about"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Renovation?
        </h2>
        <p className="text-gray-400 mb-6">
          Contact us today for a free consultation and estimate.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
