import { Play } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-300 scroll-mt-[90px]" // important for navbar offset
    >
      <div className="min-h-screen flex items-center">
        {/* ✅ SAME CONTAINER AS NAVBAR/HERO */}
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            {/* LEFT – MEDIA (give it a tiny inset so it matches reference) */}
            <Reveal>
              <div className="w-full">
                <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-white/40 bg-slate-200 shadow-sm">
                  <div className="absolute inset-0 bg-slate-900/10" />

                  <button className="absolute inset-0 grid place-items-center">
                    <div className="w-16 h-16 bg-white shadow-md grid place-items-center rounded-sm">
                      <Play size={20} className="ml-1 text-slate-900" />
                    </div>
                  </button>
                </div>
              </div>
            </Reveal>

            {/* RIGHT – TEXT */}
            <Reveal delay={0.1}>
              <div className="max-w-[520px]">
                <div className="flex items-start gap-3">
                  {/* WHO WE ARE */}
                  <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 mt-[6px] -mr-1">
                    <span>Who</span>
                    <span>We</span>
                    <span>Are</span>
                  </div>

                  <div>
                    {/* Heading (tight to bar like reference) */}
                    <div className="relative pl-4">
                      <div className="absolute left-0 top-[10px] h-10 w-[3px] bg-orange-600 rounded-full" />
                      <h2 className="text-4xl font-semibold text-slate-900 leading-tight">
                        About Mark &amp; Spark
                      </h2>
                    </div>

                    {/* Copy */}
                    <div className="mt-6 space-y-5 text-[15px] text-slate-700 leading-relaxed">
                      <p>
                        Mark &amp; Spark is a precision-driven branding and fabrication
                        studio specializing in laser engraving, custom printing, and
                        advanced manufacturing solutions.
                      </p>

                      <p>
                        We help brands transform ideas into engraved metal, merchandise,
                        fabric prints, and 3D components—built with technical accuracy.
                      </p>

                      <p>
                        From one-off customs to scalable production, we deliver reliable,
                        durable, brand-consistent results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
