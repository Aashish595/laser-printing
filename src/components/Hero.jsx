import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-36 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <Reveal>
          <div className="max-w-xl space-y-8">

            {/* Label */}
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Industrial Laser Solutions
            </span>

            {/* Heading */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-2 h-20 w-[3px] bg-orange-600 rounded-full" />
              <h1 className="text-5xl xl:text-6xl font-semibold leading-tight text-slate-900">
                Precision Laser Printing
                <br />
                <span className="text-orange-600">
                  Built for Industry
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600">
              High-accuracy laser printing, engraving, and metal fabrication
              solutions designed for manufacturing, architecture, and
              heavy-duty industrial applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-9 py-3 bg-slate-900 text-white uppercase text-xs tracking-widest hover:bg-slate-950 transition"
              >
                Get a Quote
                <ArrowRight size={14} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-9 py-3 border border-slate-900 text-slate-900 uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT MEDIA AREA */}
        <Reveal delay={0.2}>
          {/* IMPORTANT: matching left alignment */}
          <div className="max-w-xl">

            <div className="relative w-full h-[420px] xl:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">

              {/* Replace with <img> or <video> */}
              <div className="absolute inset-0 bg-slate-900/10" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
                  <Play className="text-slate-900 ml-1" size={22} />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6">
                <span className="text-xs uppercase tracking-[0.35em] text-slate-700">
                  CNC • LASER • METAL
                </span>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-slate-400" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-slate-400" />
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
