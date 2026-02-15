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

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          );

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: `-${NAVBAR_HEIGHT + 20}px 0px -50% 0px`,
      },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [NAV_ITEMS]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      {/* Container */}
      <div className="page-container h-[72px] flex items-center justify-between">
        {/* BRAND */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl sm:text-2xl font-semibold tracking-wide whitespace-nowrap"
        >
          <span className="text-slate-900">MARK</span>{" "}
          <span className="text-orange-600">&amp; SPARK</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 uppercase tracking-widest">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative transition-colors ${
                active === id
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }
              after:absolute after:left-0 after:-bottom-2 after:h-0.5
              after:bg-orange-600 after:transition-all
              ${
                active === id ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden uppercase text-xs tracking-widest text-slate-800 px-3 py-2 border border-slate-300 rounded-md"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="page-container py-4 flex flex-col gap-3">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left uppercase text-xs tracking-widest text-slate-700 hover:text-slate-900"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
