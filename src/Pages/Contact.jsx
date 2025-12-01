import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent. Timeline Improvements will contact you shortly!");
  };

  return (
    <div className="bg-black text-white px-6 sm:px-10 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Have a project in mind? Need help with a remodel?  
          Fill out the form below and we’ll get in touch with you as soon as possible.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

            <div className="space-y-4 text-gray-300 text-sm">
              <p>
                📞 <strong>Phone:</strong> (347) 228-1313
              </p>
              <p>
                ✉️ <strong>Email:</strong> timelineimprovements@gmail.com
              </p>
              <p>
                📍 <strong>Service Areas:</strong> New York, New Jersey,
                Pennsylvania
              </p>
              <p>
                🏢 <strong>Business Hours:</strong><br />
                Monday – Saturday: 8am – 6pm<br />
                Sunday: Closed
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
              <a
                href="https://www.instagram.com/timeline_improvements/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Instagram @timeline_improvements
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 text-gray-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
                  placeholder="example@email.com"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-400">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
                  placeholder="(347) 228-1313"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-md text-white h-32"
                  placeholder="Tell us about your project..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Service Coverage Area
          </h2>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-800">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_fake_key&q=New+York,NY"
              className="filter invert brightness-90"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
