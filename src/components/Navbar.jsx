"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 72;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 40;

      for (let item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-lg tracking-wide text-slate-900"
        >
          LaserPrint<span className="text-orange-600">.</span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative transition-colors duration-300
                ${
                  active === id
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }
                after:absolute after:left-0 after:-bottom-2
                after:h-[2px] after:bg-orange-600
                after:transition-all after:duration-300
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
          className="md:hidden text-xs uppercase tracking-wider text-slate-800"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-6">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left uppercase text-sm tracking-widest text-slate-700 hover:text-slate-900"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
