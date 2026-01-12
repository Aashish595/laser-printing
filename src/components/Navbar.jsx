"use client";
import { useEffect, useState } from "react";

const sections = ["about", "services", "contact"];
const NAVBAR_HEIGHT = 72;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 20;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
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

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-18 px-6 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-lg tracking-wide text-slate-900"
        >
          LaserPrint<span className="text-orange-600">.</span>
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative transition
                ${active === id
                  ? "text-slate-900 after:w-full"
                  : "text-slate-600 hover:text-slate-900 hover:after:w-full"}
                after:absolute after:left-0 after:-bottom-2
                after:h-0.5 after:bg-orange-600
                after:w-0 after:transition-all after:duration-300
              `}
            >
              {id}
            </button>
          ))}
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xs uppercase tracking-wider text-slate-800"
        >
          Menu
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-5">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left uppercase text-sm text-slate-700"
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
