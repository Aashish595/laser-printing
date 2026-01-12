'use client';

import { Zap, Scan, Cog } from "lucide-react";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-slate-900">
            Our Services
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl">
            End-to-end laser manufacturing services focused on
            precision, repeatability, and industrial-scale output.
          </p>
        </Reveal>

        {/* SERVICES GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <ServiceCard
            icon={Zap}
            title="Laser Cutting"
            text="High-precision cutting of metals and industrial materials with consistent accuracy."
          />

          {/* CARD 2 */}
          <ServiceCard
            icon={Scan}
            title="Laser Engraving"
            text="Permanent, high-resolution engraving for parts, branding, and identification."
          />

          {/* CARD 3 */}
          <ServiceCard
            icon={Cog}
            title="CNC Fabrication"
            text="Advanced CNC machining and fabrication for industrial and architectural needs."
          />

        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <Reveal>
      <div
        className="
          group
          bg-white
          border border-slate-200
          p-8
          rounded-xl
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
          hover:border-slate-300
          active:scale-[0.98]
          cursor-pointer
        "
      >
        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50">
          <Icon
            size={24}
            className="text-orange-600 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-6 text-lg font-semibold text-slate-900">
          {title}
        </h3>

        {/* TEXT */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>
    </Reveal>
  );
}
