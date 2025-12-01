import React, { useState } from "react";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    photos: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "photos") {
      setFormData({ ...formData, photos: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your quote request has been submitted. We will contact you shortly!");
  };

  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Request a Free Quote
        </h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg">
          Tell us about your project and we will provide a detailed estimate.
          We handle full home renovations, bathrooms, kitchens, windows, flooring, and more.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-xl space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-400">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
              placeholder="John Doe"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-400">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
              placeholder="email@example.com"
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-gray-400">Phone Number *</label>
            <input
              type="text"
              name="phone"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
              placeholder="(347) 228-1313"
              onChange={handleChange}
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block mb-1 text-gray-400">Project Type *</label>
            <select
              name="service"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Kitchen Remodeling">Kitchen Remodeling</option>
              <option value="Bathroom Remodeling">Bathroom Remodeling</option>
              <option value="Full Home Renovation">Full Home Renovation</option>
              <option value="Flooring / Painting">Flooring / Painting</option>
              <option value="Windows / Doors">Windows / Doors</option>
              <option value="Electrical / Plumbing">Electrical / Plumbing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-gray-400">Project Details *</label>
            <textarea
              name="message"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-md text-white h-32"
              placeholder="Describe your project. Include materials, timelines, and special requests."
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Photos */}
          <div>
            <label className="block mb-2 text-gray-400">
              Upload Photos (optional)
            </label>
            <input
              type="file"
              name="photos"
              accept="image/*"
              multiple
              className="w-full text-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium w-full"
          >
            Submit Request
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-gray-500 text-sm mt-10">
          A team member from Timeline Improvements will reach out within 24 hours.
        </p>
      </div>
    </div>
  );
}
