import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-24 md:pb-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* GRID */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 xl:gap-16 items-center">
          {/* LEFT */}
          <Reveal>
            <div className="max-w-xl">
              {/* HEADING BLOCK (bar + title) */}
              <div className="flex items-start gap-6">
                <div className="mt-3 h-16 md:h-20 w-[3px] bg-orange-600 rounded-full" />

                <div>
                  {/* TITLE (2 lines only) */}
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.05] text-slate-900">
                    Precision Brand
                    <br />
                    <span className="text-orange-600">Solutions</span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                    High-quality branding across metal, merchandise, textiles, and
                    prototypes—built to represent your brand with accuracy.
                  </p>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-9 py-3 bg-slate-900 text-white uppercase text-xs tracking-widest hover:bg-slate-950 transition"
                    >
                      Get a Quote <ArrowRight size={14} />
                    </a>

                    <a
                      href="#services"
                      className="inline-flex items-center gap-2 px-9 py-3 border border-slate-900 text-slate-900 uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT (larger video area like ref) */}
          <Reveal delay={0.2}>
            <div className="relative w-full h-[420px] md:h-[520px] xl:h-[560px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 border border-slate-200 shadow-sm">
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-slate-900/10" />

              {/* PLAY BUTTON */}
              <button
                type="button"
                aria-label="Play showreel"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition">
                  <Play className="text-slate-900 ml-1" size={22} />
                </div>
              </button>

              {/* FOOTER TEXT */}
              <div className="absolute bottom-6 left-6">
                <span className="text-xs uppercase tracking-[0.35em] text-slate-700">
                  CNC • LASER • PRINT
                </span>
              </div>

              {/* CORNER DECOR */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-slate-400/80" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
