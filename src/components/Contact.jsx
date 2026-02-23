"use client";

import { useMemo, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

/* services media (images + optional videos) */
const services = [
  { title: "Fiber Laser Engraving", src: "/fiberLaser.mp4" },
  { title: "Merchandise Printing", src: "/photo1.jpg" },
  { title: "3D Printing & Prototyping", src: "/3dPrint.mp4" },    
  { title: "Screen Printing", src: "/about.jpg" },
  { title: "CNC Machining Solutions", src: "/mainVideo.mp4" },    
  { title: "Fabric Printing", src: "/fabric.jpg" },
];


export default function Contact() {
  const media = useMemo(
    () => services.map((s) => ({ src: s.src, alt: s.title })),
    []
  );

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // AUTO SCROLL INFINITE
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % media.length);
    }, 2500);
    return () => clearInterval(t);
  }, [paused, media.length]);

  const leftIdx = (active - 1 + media.length) % media.length;
  const rightIdx = (active + 1) % media.length;

  return (
    <section id="contact" className="bg-slate-300 scroll-mt-[90px]">
      <div className="py-24 lg:py-28">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
            {/* LEFT */}
            <div className="max-w-[740px]">
              {/* HEADER */}
              <div className="flex items-start gap-3">
                <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 mt-[8px] text-right w-[46px] shrink-0">
                  <span>Get</span>
                  <span>In</span>
                  <span>Touch</span>
                </div>

                <div className="mt-[8px] h-[62px] w-[5px] bg-orange-600 shrink-0" />

                <div className="pl-2">
                  <h2 className="text-5xl font-semibold tracking-tight leading-[1] text-slate-900">
                    Contact Us
                  </h2>

                  <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-slate-700/80">
                    Tell us about your project requirements and our technical
                    team will get back to you with a tailored solution.
                  </p>
                </div>
              </div>

              {/* SERVICES + INQUIRY */}
              <div className="mt-14 pl-[64px] sm:pl-[72px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {/* Services */}
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="h-9 w-[4px] bg-orange-600" />
                      <h3 className="text-3xl font-semibold text-slate-900">
                        Services
                      </h3>
                    </div>

                    {/* ✅ Orange bullets */}
                    <ul className="mt-6 space-y-3 text-[16px] text-slate-800/80 list-disc pl-5 marker:text-orange-600">
                      {services.map((s) => (
                        <li key={s.title} className="whitespace-nowrap">
                          {s.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inquiry */}
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="h-9 w-[4px] bg-orange-600" />
                      <h3 className="text-3xl font-semibold text-slate-900">
                        Inquiry
                      </h3>
                    </div>

                    <div className="mt-6 space-y-3 text-[16px] text-slate-800/80">
                      <Row icon={<Mail size={17} />} oneLine>
                        <a
                          href="mailto:contactmarkandspark@gmail.com"
                          className="hover:underline"
                        >
                          contactmarkandspark@gmail.com
                        </a>
                      </Row>

                      <Row icon={<Phone size={17} />} oneLine>
                        <a href="tel:+918448026287" className="hover:underline">
                          +91 84480 26287
                        </a>
                        <span className="mx-2">/</span>
                        <a href="tel:+918448974976" className="hover:underline">
                          +91 84489 74976
                        </a>
                      </Row>

                      <Row icon={<Instagram size={17} />} oneLine>
                        <a
                          href="https://www.instagram.com/mark_and_spark/?utm_source=ig_web_button_share_sheet"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          @mark_and_spark
                        </a>
                      </Row>

                      <Row icon={<Youtube size={17} />} oneLine>
                        <a
                          href="https://youtube.com/@markandspark?si=AkvjWrGBNbQTDHJ4"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          @markandspark
                        </a>
                      </Row>

                      <Row icon={<MapPin size={17} />} oneLine>
                        E 77, DSIIDC Industrial Area, 110039
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — AUTO CAROUSEL */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="w-full max-w-205">
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 text-center">
                  MARK &amp; SPARK
                </h3>

                <p className="mt-2 text-center text-[14px] leading-[1.45] text-slate-700/70">
                  Mark &amp; Spark specializes in high-quality branding across
                  metal, merchandise, textiles, and prototypes.
                </p>

                {/* Auto-scroll infinite + pause on hover */}
                <div
                  className="mt-8 w-full"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <div className="relative h-[320px] sm:h-[360px]">
                    {/* left */}
                    <Card
                      item={media[leftIdx]}
                      active={false}
                      className="-translate-x-[125%] opacity-25 scale-[0.94]"
                    />
                    {/* right */}
                    <Card
                      item={media[rightIdx]}
                      active={false}
                      className="translate-x-[25%] opacity-25 scale-[0.94]"
                    />
                    {/* center */}
                    <Card item={media[active]} active main />
                  </div>
                </div>

                <p className="mt-10 text-center text-xs tracking-widest text-slate-700/60">
                  © 2026 Mark &amp; Spark.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* helpers */

function Row({ icon, children, oneLine = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-orange-500 shrink-0">{icon}</span>
      <span className={`leading-[1.6] ${oneLine ? "whitespace-nowrap" : ""}`}>
        {children}
      </span>
    </div>
  );
}

/**
 * Card supports both images and MP4 videos.
 * - Only the MAIN card auto-plays (active=true) for better performance.
 */
function Card({ item, main, active, className = "" }) {
  const isVideo = item.src?.toLowerCase().endsWith(".mp4");

  return (
    <div
      className={`
        absolute left-1/2
        ${
          main
            ? "top-0 -translate-x-1/2 w-[520px] h-[320px] sm:w-[560px] sm:h-[340px] rounded-[36px] opacity-100 shadow-xl border-white/70 bg-white"
            : "top-[64px] -translate-x-1/2 w-[360px] h-[230px] rounded-[28px] border-white/40 bg-white/20"
        }
        overflow-hidden border
        ${className}
      `}
    >
      {isVideo ? (
        <video
          className="w-full h-full object-cover"
          autoPlay={!!active}
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
      )}

      {!main && <div className="absolute inset-0 bg-slate-900/10" />}
    </div>
  );
}