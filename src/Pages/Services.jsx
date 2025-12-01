import React from "react";

export default function Services() {
  const services = [
    {
      title: "Full Home Renovations",
      desc: "Complete apartment and home remodeling, including layout changes, framing, flooring, painting, and finish work.",
      icon: "🏠",
    },
    {
      title: "Bathroom Remodeling",
      desc: "High-end bathroom upgrades, waterproofing, tile installation, plumbing adjustments, lighting, and fixture replacements.",
      icon: "🚿",
    },
    {
      title: "Kitchen Remodeling",
      desc: "Custom kitchen renovations including cabinet installation, countertops, backsplash, appliance hookups, and lighting.",
      icon: "🍽️",
    },
    {
      title: "Window Replacement Prep",
      desc: "Removal of window sills, interior finishes, and obstructions before new window installation. DOB documents & COIs provided.",
      icon: "🪟",
    },
    {
      title: "Plumbing & Electrical Coordination",
      desc: "We work closely with licensed plumbers and electricians, providing permits, indemnification forms, and building-required paperwork.",
      icon: "🔧",
    },
    {
      title: "Flooring & Painting",
      desc: "Hardwood installation, sanding, refinishing, premium interior painting, wall repair, skim coating, and finishing.",
      icon: "🎨",
    },
    {
      title: "Closet & Interior Upgrades",
      desc: "Custom closets, shelving, carpentry, baseboards, trims, and modern interior upgrades.",
      icon: "🛠️",
    },
    {
      title: "Emergency Repairs",
      desc: "Water damage, ceiling repair, wall patching, mold-resistant treatments, and urgent home fixes.",
      icon: "⚡",
    },
  ];

  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          Our Services
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          We provide high-quality renovation services tailored to New York,
          New Jersey, and Pennsylvania buildings — including co-ops, condos,
          private homes, and management-regulated properties.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/70 border border-gray-800 rounded-xl px-6 py-8 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Don’t see what you need?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We offer a wide range of custom renovation solutions. Contact us to
            discuss your project — big or small — and we’ll prepare a tailored
            plan for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
