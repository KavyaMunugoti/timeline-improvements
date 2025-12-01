import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import LicensesInsurance from "./Pages/LicensesInsurance";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem =
    "px-4 py-2 text-sm rounded-md hover:text-amber-400 transition-all";

  const activeLink = "text-amber-400 font-semibold";
  const inactiveLink = "text-gray-300";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* ⭐ TOP CONTACT BAR */}
      <div className="w-full bg-gray-900 text-[11px] sm:text-xs text-gray-300 py-2 px-4 flex items-center justify-between">
        <span>📞 (347) 228-1313</span>
        <span>✉️ timelineimprovements@gmail.com</span>
      </div>

      {/* ⭐ MAIN HEADER */}
      <header className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center font-bold text-black">
              TI
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Timeline Improvements LLC
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                General Contracting
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-3">
            <NavItem to="/" label="Home" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />
            <NavItem to="/about" label="About" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />
            <NavItem to="/services" label="Services" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />
            <NavItem to="/projects" label="Projects" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />
            <NavItem to="/licenses" label="Licenses" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />
            <NavItem to="/contact" label="Contact" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />
            <NavItem to="/gallery" label="Gallery" activeLink={activeLink} inactiveLink={inactiveLink} navItem={navItem} />

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-amber-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-3">
            <NavItemMobile to="/" label="Home" setMenuOpen={setMenuOpen} />
            <NavItemMobile to="/about" label="About" setMenuOpen={setMenuOpen} />
            <NavItemMobile to="/services" label="Services" setMenuOpen={setMenuOpen} />
            <NavItemMobile to="/projects" label="Projects" setMenuOpen={setMenuOpen} />
            <NavItemMobile to="/licenses" label="Licenses" setMenuOpen={setMenuOpen} />
            <NavItemMobile to="/contact" label="Contact" setMenuOpen={setMenuOpen} />
            <NavItemMobile to="/gallery" label="Gallery" setMenuOpen={setMenuOpen} />
          </div>
        )}
      </header>

      {/* ⭐ MAIN CONTENT */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/licenses" element={<LicensesInsurance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {/* ⭐ FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-10 text-center text-gray-400">
        <div className="max-w-6xl mx-auto px-4 space-y-6">

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <a href="/" className="hover:text-amber-400">Home</a>
            <a href="/services" className="hover:text-amber-400">Services</a>
            <a href="/projects" className="hover:text-amber-400">Projects</a>
            <a href="/licenses" className="hover:text-amber-400">Licenses</a>
            <a href="/contact" className="hover:text-amber-400">Contact</a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Timeline Improvements LLC — Licensed & Insured
          </p>

          <p className="text-xs text-gray-500">
            Follow us on Instagram:
            <a
              href="https://www.instagram.com/timeline_improvements/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-400 hover:text-blue-300 underline"
            >
              @timeline_improvements
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

/* NAV ITEM FOR DESKTOP */
function NavItem({ to, label, activeLink, inactiveLink, navItem }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `${navItem} ${isActive ? activeLink : inactiveLink}`
      }
    >
      {label}
    </NavLink>
  );
}

/* NAV ITEM FOR MOBILE */
function NavItemMobile({ to, label, setMenuOpen }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={() => setMenuOpen(false)}
      className="block text-gray-300 text-sm py-2 hover:text-amber-400"
    >
      {label}
    </NavLink>
  );
}
