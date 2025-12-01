import React from "react";

export default function Projects() {
  // Add as many as you want — this is easy to expand
  const projects = [
    {
      title: "Full Apartment Renovation – Manhattan, NY",
      desc: "A complete remodel including bathroom upgrade, flooring, painting, custom millwork, and pre-window installation preparation.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Bathroom Remodel – Brooklyn, NY",
      desc: "Modern bathroom redesign with porcelain tiles, recessed lighting, luxury fixtures, waterproofing, and plumbing reconfiguration.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Kitchen Renovation – Jersey City, NJ",
      desc: "New cabinetry, quartz countertops, backsplash installation, updated electrical layout, and appliance adjustments.",
      image:
        "https://images.unsplash.com/photo-1600585154154-29dea37a5d7b?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Window Prep & Restoration – Upper West Side, NY",
      desc: "Removed obstructions, repaired sills, restored walls, and prepared openings for new window installation per management guidelines.",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45e578f39f?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Living Room Remodel – Hoboken, NJ",
      desc: "Smooth skim-coated walls, premium paint, new flooring, trim upgrades, and feature wall illumination installation.",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20a2?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Our Projects
        </h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-12">
          A look at some of our renovation work across New York, New Jersey, and
          Pennsylvania. We specialize in high-quality craftsmanship, attention to 
          detail, and building-approved project workflows.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:border-blue-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Want to see more of our work?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            We’re constantly updating our portfolio with new remodels, before-and-after
            transformations, and building-approved projects.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Request Project Photos
          </a>
        </div>
      </div>
    </div>
  );
}
