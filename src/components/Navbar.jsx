"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAVBAR_HEIGHT = 72;

export default function Navbar() {
  const NAV_ITEMS = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  // Smooth scroll with offset
  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10; // little extra air

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    // Best solution: IntersectionObserver (no flicker)
    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      {
        // account for fixed navbar height
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: `-${NAVBAR_HEIGHT + 20}px 0px -50% 0px`,
      },
    );

    sections.forEach((s) => io.observe(s));

    return () => io.disconnect();
  }, [NAV_ITEMS]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="w-full max-w-[1400px] mx-auto h-[72px] px-6 flex items-center justify-between">
        {/* BRAND */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-semibold tracking-wide"
        >
          <span className="text-slate-900">MARK</span>{" "}
          <span className="text-orange-600">&amp; SPARK</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative transition-colors
            ${
              active === id
                ? "text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }
            after:absolute after:left-0 after:-bottom-2 after:h-[2px]
            after:bg-orange-600 after:transition-all
            ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}
          `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden uppercase text-xs tracking-widest"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU ...same */}
    </nav>
  );
}
