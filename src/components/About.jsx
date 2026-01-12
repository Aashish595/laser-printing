import { Settings, ShieldCheck, Factory } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-stretch">

        {/* LEFT CARD */}
        <Reveal>
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-12 flex flex-col justify-center">

            <span className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-6">
              Who We Are
            </span>

            <div className="relative pl-6 mb-6">
              <div className="absolute left-0 top-1 h-14 w-0.75 bg-orange-600 rounded-full" />
              <h2 className="text-4xl font-semibold text-slate-900">
                About LaserPrint Co.
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-xl mb-4">
              LaserPrint Co. delivers industrial-grade laser printing,
              engraving, and metal fabrication solutions with uncompromising
              accuracy, durability, and repeatability.
            </p>

            <p className="text-slate-600 max-w-xl mb-8">
              Our infrastructure, machinery, and quality processes are
              engineered to meet strict manufacturing and production standards.
            </p>

            {/* FEATURES */}
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-slate-700">
                <Settings className="text-orange-600 mt-0.5" size={18} />
                High-precision CNC & laser systems
              </li>

              <li className="flex items-start gap-4 text-sm text-slate-700">
                <ShieldCheck className="text-orange-600 mt-0.5" size={18} />
                ISO-aligned quality & safety standards
              </li>

              <li className="flex items-start gap-4 text-sm text-slate-700">
                <Factory className="text-orange-600 mt-0.5" size={18} />
                Scalable production for industrial volumes
              </li>
            </ul>
          </div>
        </Reveal>

        {/* RIGHT CARD */}
        <Reveal delay={0.2}>
          <div className="relative bg-linear-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center overflow-hidden">

            <span className="uppercase text-xs tracking-[0.3em] text-slate-700 z-10">
              Factory Floor
            </span>

            {/* Decorative Corners */}
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-slate-400" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-slate-400" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
