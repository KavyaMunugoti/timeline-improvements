// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import BeforeAfter from "./Components/BeforeAfter";
import Process from "./Components/Process";
import Projects from "./Components/Projects";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import VideoGallery from "./Components/VideoGallery";
import FloatingButtons from "./Components/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <Services />
      </section>

      <BeforeAfter />

      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
        <Process />
      </section>

      <Projects />

      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8">
        <Reviews />
      </section>

      <section id="gallery">
        <VideoGallery />
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>

      <FloatingButtons />
    </div>
  );
}
