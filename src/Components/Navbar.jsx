import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
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
        <nav className="hidden md:flex gap-6 text-sm text-slate-200">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-emerald-400">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:3472281313"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold text-emerald-200"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim background */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed right-0 top-0 h-full w-[78%] max-w-sm bg-slate-950 z-50 px-6 py-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="text-sm font-semibold text-emerald-400">
                  Timeline Improvements
                </div>
                <button onClick={() => setOpen(false)}>
                  <X size={26} className="text-white" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-8 text-lg text-white">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="tracking-wide hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href="tel:3472281313"
                  className="flex items-center justify-center gap-3 rounded-full bg-emerald-500 py-4 text-lg font-semibold text-slate-900"
                >
                  <Phone size={20} />
                  Call 347-228-1313
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
