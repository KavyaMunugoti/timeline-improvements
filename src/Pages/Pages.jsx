import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
          High-Quality Home & Apartment Renovations in New York City
        </h1>
        <p className="text-sm sm:text-lg text-gray-300 mb-6">
          Bathrooms • Kitchens • Full Apartments • Windows • Flooring • Painting
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-blue-500 hover:bg-blue-600 text-sm font-semibold"
          >
            Request a Free Quote
          </Link>
          <Link
            to="/projects"
            className="px-6 py-2.5 rounded-full border border-gray-500 text-sm font-semibold hover:border-white hover:text-white"
          >
            View Recent Projects
          </Link>
        </div>

        <p className="text-xs text-gray-400">
          We coordinate with building management, licensed plumbers &
          electricians, and handle all paperwork required by your co-op or
          condo.
        </p>
      </div>
    </section>
  );
}
