import React from "react";

export default function About() {
  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          About Timeline Improvements LLC
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          A licensed and insured general contracting company proudly serving New
          York, New Jersey & Pennsylvania — delivering reliable craftsmanship,
          transparent communication, and high-quality renovations.
        </p>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Timeline Improvements LLC is a trusted general contracting
              company specializing in residential renovations. From bathrooms
              and kitchens to full home remodels and window replacement
              projects, we handle every job with precision and care.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our team brings years of hands-on experience in construction,
              project management, and customer service — ensuring your home
              improvement project is completed professionally and on time.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We take pride in maintaining strong relationships with building
              management companies, boards, engineers, and clients — providing
              all required documents such as COIs, permits, and indemnification
              forms quickly and efficiently.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Why Homeowners Choose Us
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Licensed & Fully Insured</li>
              <li>✔ Reliable, clean, and professional crew</li>
              <li>✔ Transparent communication & honest pricing</li>
              <li>✔ Skilled in tight-timeline & building-restricted projects</li>
              <li>✔ Experienced in DOB filings & permit requirements</li>
              <li>✔ High-quality finishes and attention to detail</li>
            </ul>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide exceptional craftsmanship paired with
            professional project management. Whether you're updating an
            apartment, renovating a bathroom, or preparing for a new window
            installation, we are committed to delivering results that exceed
            expectations every time.
          </p>
        </div>
      </div>
    </div>
  );
}
