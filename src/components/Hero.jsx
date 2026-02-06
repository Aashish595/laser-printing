import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden min-h-screen">
      <div className="min-h-screen flex items-center">
        {/*  Use global container (reduces side space) */}
        <div className="page-container">
          {/*  Give more width to video side */}
          <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-10 xl:gap-12 items-center">
            {/* LEFT */}
            <Reveal>
              <div className="max-w-lg xl:max-w-xl">
                <div className="flex items-start gap-6">
                  {/* BAR */}
                  <div className="mt-3 h-16 md:h-20 w-1.5 bg-orange-600 shrink-0 rounded-full" />

                  <div className="min-w-0">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.05] text-slate-900">
                      <span className="whitespace-nowrap">Precision Brand</span>
                      <br />
                      <span className="text-orange-600">Solutions</span>
                    </h1>

                    <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                      High-quality branding across metal, merchandise, textiles,
                      and prototypes—built to represent your brand with
                      accuracy.
                    </p>

                    <div className="mt-8 flex items-center gap-5 whitespace-nowrap">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white uppercase text-xs tracking-widest hover:bg-slate-950 transition"
                      >
                        Get a Quote <ArrowRight size={14} />
                      </a>

                      <a
                        href="#services"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-slate-900 text-slate-900 uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT (BIGGER VIDEO) */}
            <Reveal delay={0.2}>
              <div className="relative w-full">
                <div
                  className="
                    relative w-full rounded-3xl overflow-hidden
                    border border-slate-200 bg-linear-to-br from-slate-200 to-slate-300
                    shadow-sm
                    aspect-video
                    xl:aspect-auto xl:min-h-[75vh]
                  "
                >
                  <div className="absolute inset-0 bg-slate-900/10" />

                  <button
                    type="button"
                    aria-label="Play showreel"
                    className="absolute inset-0 grid place-items-center"
                  >
                    <div className="w-16 h-16 bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition">
                      <Play className="text-slate-900 ml-1" size={22} />
                    </div>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
