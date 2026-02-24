"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
    [],
  );

  const [active, setActive] = useState(0);

  // hover pause + manual pause
  const [hoverPaused, setHoverPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);

  // smooth crossfade
  const [prev, setPrev] = useState(null);
  const [entering, setEntering] = useState(false);

  const paused = hoverPaused || manualPaused;

  const go = (dir) => {
    setActive((i) => {
      setPrev(i);
      return (i + dir + media.length) % media.length;
    });

    setManualPaused(true);
    window.setTimeout(() => setManualPaused(false), 5000);
  };

  // AUTO SCROLL
  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), 3000);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, media.length]);

  // trigger fade on slide change
  useEffect(() => {
    setEntering(true);
    const r = window.requestAnimationFrame(() => setEntering(false));
    return () => window.cancelAnimationFrame(r);
  }, [active]);

  // remove previous after fade completes
  useEffect(() => {
    if (prev === null) return;
    const t = window.setTimeout(() => setPrev(null), 520);
    return () => window.clearTimeout(t);
  }, [prev]);

  const leftIdx = (active - 1 + media.length) % media.length;
  const rightIdx = (active + 1) % media.length;

  return (
    <section id="contact" className="bg-slate-300 scroll-mt-[90px]">
      <div className="py-24 lg:py-28">
        <div className="page-container">
          {/* ✅ fixed safe right column width so carousel never overlaps Inquiry */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px] gap-16 items-start">
            {/* LEFT */}
            <div className="max-w-[740px]">
              {/* HEADER */}
              <div className="flex items-start gap-3">
                <div className="flex items-start gap-3 shrink-0 pt-[2px]">
                  <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 text-right w-[46px]">
                    <span>Get</span>
                    <span>In</span>
                    <span>Touch</span>
                  </div>
                  <div className="w-[5px] bg-orange-600 h-[44px] md:h-[56px]" />
                </div>

                <div className="pl-2 min-w-0">
                  <h2 className="text-5xl font-semibold tracking-tight leading-none text-slate-900">
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
                    <MiniTitle>Services</MiniTitle>

                    <ul className="mt-6 space-y-3 text-[16px] text-slate-800/80 list-disc pl-5 marker:text-orange-600">
                      {services.map((s) => (
                        <li key={s.title}>{s.title}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Inquiry */}
                  <div>
                    <MiniTitle>Inquiry</MiniTitle>

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

            {/* RIGHT — CAROUSEL */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[520px]">
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 text-center">
                  MARK &amp; SPARK
                </h3>

                <p className="mt-2 text-center text-[14px] leading-[1.45] text-slate-700/70">
                  Mark &amp; Spark specializes in high-quality branding across
                  metal, merchandise, textiles, and prototypes.
                </p>

                <div
                  className="mt-8 w-full"
                  onMouseEnter={() => setHoverPaused(true)}
                  onMouseLeave={() => setHoverPaused(false)}
                >
                  {/* ✅ clipping prevents overlap */}
                  <div className="relative h-[300px] sm:h-[340px] rounded-[40px] overflow-hidden">
                    {/* side peeks */}
                    <Card
                      item={media[leftIdx]}
                      variant="side"
                      className="left-[-18%] top-1/2 -translate-y-1/2 opacity-25 scale-[0.96]"
                    />
                    <Card
                      item={media[rightIdx]}
                      variant="side"
                      className="right-[-18%] top-1/2 -translate-y-1/2 opacity-25 scale-[0.96]"
                    />

                    {/* crossfade prev -> active */}
                    {prev !== null && (
                      <Card
                        item={media[prev]}
                        variant="main"
                        active={false}
                        className={`transition-opacity duration-500 ease-out ${
                          entering ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}

                    <Card
                      item={media[active]}
                      variant="main"
                      active
                      className={`transition-opacity duration-500 ease-out ${
                        entering ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    {/* controls */}
                    <button
                      type="button"
                      aria-label="Previous"
                      onClick={() => go(-1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/70 backdrop-blur border border-white/70 shadow-sm hover:bg-white transition"
                    >
                      <ChevronLeft size={20} className="text-slate-900" />
                    </button>

                    <button
                      type="button"
                      aria-label="Next"
                      onClick={() => go(1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/70 backdrop-blur border border-white/70 shadow-sm hover:bg-white transition"
                    >
                      <ChevronRight size={20} className="text-slate-900" />
                    </button>
                  </div>

                  {/* dots */}
                  <div className="mt-4 flex justify-center gap-2">
                    {media.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => {
                          setPrev(active);
                          setActive(i);
                          setManualPaused(true);
                          window.setTimeout(() => setManualPaused(false), 5000);
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          i === active
                            ? "w-8 bg-orange-600"
                            : "w-3 bg-slate-400/60"
                        }`}
                      />
                    ))}
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

function MiniTitle({ children }) {
  return (
    <div className="flex items-center gap-4">
      {/* ✅ same bar height for Services + Inquiry */}
      <div className="h-9 w-[4px] bg-orange-600 shrink-0" />
      <h3 className="text-3xl font-semibold text-slate-900 leading-none">
        {children}
      </h3>
    </div>
  );
}

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

function Card({ item, variant, active, className = "" }) {
  const isVideo = item.src.toLowerCase().endsWith(".mp4");

  const base =
    variant === "main"
      ? "absolute inset-0 rounded-[40px] shadow-xl border border-white/70 bg-white"
      : "absolute w-[72%] h-[72%] rounded-[28px] border border-white/40 bg-white/20";

  return (
    <div
      className={`${base} overflow-hidden ${
        variant === "side" ? "pointer-events-none" : ""
      } ${className}`}
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

      {variant === "side" && (
        <div className="absolute inset-0 bg-slate-900/10" />
      )}
    </div>
  );
}