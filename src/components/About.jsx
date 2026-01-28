import { Settings, ShieldCheck, Factory, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen overflow-hidden bg-slate-300"
    >
      {/* Use flex to vertically center everything in 100vh */}
      <div className="h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        {/* tighter layout */}
        <div className="w-full grid lg:grid-cols-2 gap-8 xl:gap-10 items-stretch">
          {/* LEFT: MEDIA */}
          <Reveal>
            <div className="h-full">
              <div className="relative h-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-200 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200" />
                <div className="absolute inset-0 bg-slate-900/10" />

                <button
                  type="button"
                  aria-label="Play studio video"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-[68px] h-[68px] rounded-full bg-white/90 shadow-lg flex items-center justify-center transition hover:scale-[1.06]">
                    <div className="w-11 h-11 rounded-full bg-slate-900/5 flex items-center justify-center">
                      <Play className="text-slate-900 ml-1" size={20} />
                    </div>
                  </div>
                </button>

                <div className="absolute bottom-5 left-6">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-slate-700/80">
                    Studio • Process • Quality
                  </span>
                </div>

                <div className="absolute top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-white/40" />
              </div>
            </div>
          </Reveal>

          {/* RIGHT: CONTENT */}
          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white shadow-sm p-7 md:p-8 flex flex-col justify-center">
              {/* tag */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-orange-600" />
                  Who we are
                </span>
              </div>

              {/* heading */}
              <div className="mt-4 relative pl-5">
                <div className="absolute left-0 top-1.5 h-9 md:h-10 w-[3px] bg-orange-600 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  About Mark &amp; Spark
                </h2>
              </div>

              {/* shorter copy (STRICT 100vh friendly) */}
              <p className="mt-4 text-[13px] md:text-sm text-slate-700 leading-relaxed">
                Precision branding &amp; fabrication—laser engraving, custom printing, and
                production-ready work built for clean finishing and consistency.
              </p>

              <p className="mt-3 text-[13px] md:text-sm text-slate-700 leading-relaxed">
                From one-off builds to bulk runs, we keep output accurate, durable, and brand-correct.
              </p>

              {/* features -> 2 columns on desktop to save height */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Feature
                  icon={<Settings size={18} className="text-orange-600" />}
                  title="Precision workflow"
                  desc="Repeatable, clean output."
                />
                <Feature
                  icon={<ShieldCheck size={18} className="text-orange-600" />}
                  title="Quality checks"
                  desc="Durable professional finish."
                />
                <Feature
                  icon={<Factory size={18} className="text-orange-600" />}
                  title="Scalable production"
                  desc="Custom to bulk—smooth."
                />
                {/* Optional 4th if you want (kept short) */}
                <Feature
                  icon={<span className="text-orange-600 font-bold text-sm">✓</span>}
                  title="Brand accuracy"
                  desc="Logo-safe detailing."
                />
              </div>

              {/* micro note (optional) */}
              <div className="mt-4 text-[11px] text-slate-500">
                *Timelines and finishing depend on material &amp; quantity.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div
      className="
        group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50
        px-4 py-3 transition-all duration-300
        hover:-translate-y-0.5 hover:bg-white hover:border-slate-300
        hover:shadow-[0_10px_22px_rgba(2,6,23,0.08)]
      "
    >
      <div className="mt-0.5 grid place-items-center h-9 w-9 rounded-xl bg-white border border-slate-200">
        <div className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-slate-900 leading-snug">
          {title}
        </div>
        <div className="text-[12px] text-slate-600 leading-snug mt-1">
          {desc}
        </div>
      </div>
    </div>
  );
}
