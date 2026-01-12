"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const NAVBAR_HEIGHT = 72;

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto h-18 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-lg tracking-wide"
        >
          LaserPrint Co.
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          {["about", "experience", "services", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-gray-600 hover:text-black transition"
            >
              {id}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm uppercase"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {["about", "experience", "services", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left uppercase text-sm text-gray-700"
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
