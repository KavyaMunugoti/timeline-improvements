import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#before-after" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔒 Lock background scrolling + interaction
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Timeline Improvements LLC
          </div>
          <div className="text-[11px] text-slate-400">
            Licensed & Insured General Contractor
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:3472281313"
          className="hidden items-center gap-2 rounded-full border border-emerald-400/40 
                     bg-emerald-500/10 px-4 py-2 text-xs font-semibold 
                     text-emerald-200 hover:bg-emerald-500/20 transition md:inline-flex"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-slate-200"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-slate-950/98 backdrop-blur pointer-events-auto"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-screen flex-col px-6 pt-8 pb-28 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="text-sm font-semibold text-emerald-400">
                  Timeline Improvements
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-300"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-6 text-xl text-slate-100">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="transition hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto pt-10">
                <a
                  href="tel:3472281313"
                  className="flex items-center justify-center gap-3 rounded-full 
                             bg-emerald-500 px-6 py-4 text-lg font-semibold 
                             text-slate-900 hover:bg-emerald-400 transition"
                >
                  <Phone size={20} />
                  Call 347-228-1313
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
