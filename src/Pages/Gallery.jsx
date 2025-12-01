import React from "react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Bathroom Remodel – Manhattan, NY",
      before:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=60",
      after:
        "https://images.unsplash.com/photo-1600566753119-1a59f77f1c33?auto=format&fit=crop&w=1000&q=60",
    },
    {
      title: "Kitchen Upgrade – Jersey City, NJ",
      before:
        "https://images.unsplash.com/photo-1507086193273-7d29e1d1f0f3?auto=format&fit=crop&w=900&q=60",
      after:
        "https://images.unsplash.com/photo-1600585154154-29dea37a5d7b?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Living Room Finish – Brooklyn, NY",
      before:
        "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=900&q=60",
      after:
        "https://images.unsplash.com/photo-1615874959474-d609969a20a2?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Before & After Gallery
        </h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg">
          Explore the transformation of kitchens, bathrooms, living rooms, and
          full renovations completed by Timeline Improvements LLC.  
          Quality, precision, and professional craftsmanship.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div className="relative group h-60 overflow-hidden">
                {/* BEFORE IMAGE */}
                <img
                  src={item.before}
                  alt="Before"
                  className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:-translate-x-full"
                />

                {/* AFTER IMAGE */}
                <img
                  src={item.after}
                  alt="After"
                  className="absolute w-full h-full object-cover translate-x-full transition-transform duration-500 group-hover:translate-x-0"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Swipe or hover to reveal the transformation.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-semibold mb-4">
            Want to showcase your renovation idea?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us to request a consultation and receive a custom estimate.
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
