"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useRef, useEffect } from "react";

const NAVBAR_H = 72;

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full bg-white pt-[72px]">
      <div className="page-container">
        <div className="grid lg:grid-cols-[0.62fr_1.38fr] gap-10 items-center min-h-[calc(100vh-72px)] py-10 lg:py-0">
          {/* LEFT */}
          <Reveal>
            <div className="max-w-[520px]">
              <div className="flex items-start gap-6">
                {/* BAR: aligned to first line top */}
               <span className="w-[6px] bg-orange-600 shrink-0 mt-[6px] h-[64px] sm:h-[65px] md:h-[110px] " />

                <div className="min-w-0">
                  {/* TITLE: FORCE 2 lines only */}
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.03] tracking-tight text-slate-900">
                    Precision
                    <br />
                    <span className="text-orange-600 whitespace-nowrap">
                      Brand Solutions
                    </span>
                  </h1>

                  {/* DESC: force clean 3-line feel */}
                  <p className="mt-6 text-base md:text-sm text-slate-600 font-semibold leading-relaxed max-w-[480px] [text-wrap:normal]">
                    Mark &amp; Spark specializes in high-quality branding across metal,
                    merchandise, textiles, and prototypes
                    
                    built to represent your brand with accuracy.
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
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

          {/* RIGHT */}
          <Reveal delay={0.2}>
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-[56vh] lg:h-[72vh] xl:h-[78vh]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/mainVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
