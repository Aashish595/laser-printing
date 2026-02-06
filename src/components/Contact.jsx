"use client";

import { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Contact() {
  const images = useMemo(
    () => [
      { src: "/images/ms-1.jpg", alt: "Mark & Spark 1" },
      { src: "/images/ms-2.jpg", alt: "Mark & Spark 2" },
      { src: "/images/ms-3.jpg", alt: "Mark & Spark 3" },
      { src: "/images/ms-4.jpg", alt: "Mark & Spark 4" },
      { src: "/images/ms-5.jpg", alt: "Mark & Spark 5" },
      { src: "/images/ms-6.jpg", alt: "Mark & Spark 6" },
    ],
    [],
  );

  const [active, setActive] = useState(1);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  const leftIdx = (active - 1 + images.length) % images.length;
  const rightIdx = (active + 1) % images.length;

  return (
    <section id="contact" className="bg-slate-300 scroll-mt-[90px]">
      <div className="py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
            {/* LEFT */}
            <div>
              {/* HEADER */}
              <div className="flex items-start gap-3">
                <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 mt-[6px]">
                  <span>Get</span>
                  <span>In</span>
                  <span>Touch</span>
                </div>

                <div className="mt-[6px] h-[62px] w-[3px] bg-orange-600 rounded-full" />

                <div className="pl-1">
                  <h2 className="text-[56px] md:text-[45px] leading-[1] font-semibold tracking-tight text-slate-900">
                    Contact Us
                  </h2>

                  <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-slate-700/80">
                    Tell us about your project requirements and our technical
                    team will get back to you with a tailored solution.
                  </p>
                </div>
              </div>

              {/*  SERVICES + INQUIRY aligned with title block */}
              <div className="mt-6 pl-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Services */}
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="h-9 w-[3px] bg-orange-600 rounded-full" />
                      <h3 className="text-2xl font-semibold text-slate-900">
                        Services
                      </h3>
                    </div>

                    <ul className="mt-5 space-y-1 text-[16px] text-slate-800/80">
                      {[
                        "Fiber Laser Engraving",
                        "Merchandise Printing",
                        "3D Printing & Prototyping",
                        "Fabric Printing",
                        "Screen Printing",
                        "CNC Machining Solutions",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-orange-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inquiry */}
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="h-9 w-[3px] bg-orange-600 rounded-full" />
                      <h3 className="text-2xl font-semibold text-slate-900">
                        Inquiry
                      </h3>
                    </div>

                    <div className="mt-5 space-y-1 text-[16px] text-slate-800/80">
                      <Row
                        icon={<Mail size={17} />}
                        text="contactmarkandspark@gmail.com"
                      />
                      <Row
                        icon={<Phone size={17} />}
                        text="+91 84480 26287 / +91 84489 74976"
                      />
                      <Row
                        icon={<Instagram size={17} />}
                        text="@Mark_and_spark"
                      />
                      <Row icon={<Youtube size={17} />} text="@Youtube" />
                      <Row
                        icon={<MapPin size={17} />}
                        text="E 77, DSIIDC Industrial Area, 110039"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 text-center">
                MARK &amp; SPARK
              </h3>
              <p className="mt-2 text-center text-[14px] leading-[1.45] text-slate-700/70">
  Mark &amp; Spark specializes in high-quality branding across metal,
  <br />
  merchandise, textiles, and prototypes—built to represent your brand with accuracy.
</p>


              {/*  STACKED CAROUSEL (like your reference) */}
              <div className="mt-7 w-full max-w-[760px]">
                <div className="relative h-[260px]">
                  {/* left behind */}
                  <div className="absolute left-1/2 top-[36px] -translate-x-[110%] w-[320px] h-[200px] rounded-[28px] overflow-hidden border border-white/50 bg-white/30 shadow-sm opacity-30 scale-[0.96]">
                    <img
                      src={images[leftIdx].src}
                      alt={images[leftIdx].alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-slate-900/10" />
                  </div>

                  {/* right behind */}
                  <div className="absolute left-1/2 top-[36px] translate-x-[10%] w-[320px] h-[200px] rounded-[28px] overflow-hidden border border-white/50 bg-white/30 shadow-sm opacity-30 scale-[0.96]">
                    <img
                      src={images[rightIdx].src}
                      alt={images[rightIdx].alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-slate-900/10" />
                  </div>

                  {/* main front */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[360px] h-[230px] rounded-[32px] overflow-hidden border border-white/70 bg-white shadow-md">
                    <img
                      src={images[active].src}
                      alt={images[active].alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* arrows */}
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-1/2 top-[105px] -translate-x-[210px] w-10 h-10 rounded-full bg-white/90 border border-white/70 shadow grid place-items-center hover:bg-white"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="absolute left-1/2 top-[105px] translate-x-[170px] w-10 h-10 rounded-full bg-white/90 border border-white/70 shadow grid place-items-center hover:bg-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-xs tracking-widest text-slate-700/60">
                © 2026 LASERPRINT CO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[3px] text-orange-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
