"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative bg-slate-50 pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="page-container">
        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-10 xl:gap-12 items-center">
          {/* LEFT */}
          <Reveal>
            <div className="max-w-lg xl:max-w-xl">
              <div className="flex items-start gap-6">
                <div className="mt-3 h-16 md:h-27 w-1.5 bg-orange-600 shrink-0 rounded-full" />

                <div className="min-w-0">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.05] text-slate-900">
                    <span className="whitespace-nowrap">Precision</span>
                    <br />
                    <span className="text-orange-600 text-nowrap">
                      Brand Solutions
                    </span>
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                    High-quality branding across metal, merchandise, textiles,
                    and prototypes—built to represent your brand with accuracy.
                  </p>

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
            <div className="relative w-full">
              <div
                className="
                  relative w-full rounded-3xl overflow-hidden
                  border border-slate-200 shadow-sm
                  aspect-video
                  xl:aspect-auto xl:min-h-[70vh]
                "
              >
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

                <div className="absolute inset-0 bg-slate-900/15" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
