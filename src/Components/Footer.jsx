// src/Components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-slate-500 border-t border-slate-800 mt-20">
      © {new Date().getFullYear()} Timeline Improvements LLC — All rights reserved.
    </footer>
  );
}
