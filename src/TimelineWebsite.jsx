import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function TimelineWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Timeline Improvements LLC
        </motion.h1>
        <p className="text-lg mb-6 max-w-xl">
          General contracting company specializing in home and apartment renovations — Licensed and Insured.
        </p>
        <div className="space-x-4">
          <Button variant="secondary">Request a Free Quote</Button>
          <Button variant="outline">View Our Work</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-8 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-6">
          Timeline Improvements LLC is a trusted general contracting company serving New Jersey, New York, and Pennsylvania. 
          We specialize in complete home and apartment renovations, combining craftsmanship, reliability, and modern design to bring your vision to life.
        </p>
        <p className="max-w-3xl mx-auto text-gray-300">
          Our mission is to deliver exceptional renovation experiences through professionalism, transparency, and attention to detail.
          With years of experience, we take pride in every project—big or small.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Full Home Renovations", desc: "Complete home transformations from demolition to final finishes." },
            { title: "Kitchen Remodeling", desc: "Modern kitchen designs blending functionality and aesthetics." },
            { title: "Bathroom Remodeling", desc: "Elegant bathrooms crafted for comfort and luxury." },
            { title: "Basement Finishing", desc: "Turn basements into beautiful, livable spaces." },
            { title: "Painting & Flooring", desc: "Professional painting and flooring services for flawless finishes." },
            { title: "Electrical & Plumbing Coordination", desc: "Licensed professionals ensuring safety and reliability." },
          ].map((service, i) => (
            <Card key={i} className="bg-gray-900 border-gray-700 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6">Client Testimonials</h2>
        <div className="max-w-3xl mx-auto text-gray-400 space-y-6">
          <blockquote>“Excellent service and attention to detail! My kitchen remodel came out perfect.” – Sarah T.</blockquote>
          <blockquote>“Jay and his team were professional, on time, and exceeded expectations.” – Michael R.</blockquote>
          <blockquote>“Highly recommend Timeline Improvements for quality renovations.” – Lauren P.</blockquote>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-gray-950 text-center">
        <h2 className="text-3xl font-semibold mb-6">Follow Our Work</h2>
        <p className="text-gray-400 mb-6">See our latest renovation projects on Instagram</p>
        <a
          href="https://instagram.com/timeline_improvements"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          <Instagram className="mr-2" /> @timeline_improvements
        </a>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6">Request a Quote</h2>
        <p className="text-gray-400 mb-6">
          Ready to start your next renovation? Contact us for a free estimate.
        </p>
        <Button variant="secondary">Contact Us</Button>
        <div className="mt-10 text-gray-400">
          <p>📍 Serving New Jersey, New York & Pennsylvania</p>
          <p>📞 (347) 228-1313 | ✉️ timelineimprovements@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Timeline Improvements LLC | Licensed & Insured</p>
      </footer>
    </div>
  );
}
