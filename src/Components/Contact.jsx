import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* RIGHT SIDE ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-2xl bg-slate-900/60 border border-slate-700 
                     backdrop-blur-xl shadow-2xl space-y-6 text-lg"
        >
          {/* Phone */}
          <a
            href="tel:3472281313"
            className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition"
          >
            <Phone size={22} /> 347-228-1313
          </a>

          {/* Email */}
          <a
            href="mailto:TimelineImprovements@gmail.com"
            className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition"
          >
            <Mail size={22} /> TimelineImprovements@gmail.com
          </a>

         <iframe
           title="Timeline Improvements Location"
           src="https://www.google.com/maps?q=108+Grace+St+Jersey+City+NJ+07307&output=embed"
           width="100%"
           height="350"
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           className="rounded-xl border border-slate-700 
             grayscale brightness-75 contrast-125
             hover:brightness-100 hover:grayscale-0
             transition duration-500"
          />

          <p className="text-slate-400 text-sm">
            📍 Serving Jersey City & nearby areas
          </p>


          {/* Response time */}
          <div className="flex items-center gap-4 text-slate-300">
            <Clock size={22} /> Reply in 1–2 business days
          </div>
        </motion.div>

      </div>
    </section>
  );
}
