// src/Components/FloatingButtons.jsx
import React from "react";
import { MessageCircle, Instagram } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/13472281313" // TODO: put your real number here, format: wa.me/COUNTRYCODEPHONENUMBER
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition hover:scale-105 hover:bg-emerald-400"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/timeline_improvements/" // TODO: replace with your real IG URL
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/40 transition hover:scale-105"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}
