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

/* 🔁 same service images */
const services = [
  { title: "Fiber Laser Engraving", img: "/tshirt.jpg" },
  { title: "Merchandise Printing", img: "/photo1.jpg" },
  { title: "3D Printing & Prototyping", img: "/branded-Merchandise.jpg" },
  { title: "Screen Printing", img: "/about.jpg" },
  { title: "CNC Machining Solutions", img: "/tshirt.jpg" },
  { title: "Fabric Printing", img: "/photo1.jpg" },
];

export default function Contact() {
  const images = useMemo(
    () =>
      services.map((s) => ({
        src: s.img,
        alt: s.title,
      })),
    [],
  );

  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  const leftIdx = (active - 1 + images.length) % images.length;
  const rightIdx = (active + 1) % images.length;

  return (
    <section id="contact" className="bg-slate-300 scroll-mt-[90px]">
      <div className="py-24 lg:py-28">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">

            {/* LEFT */}
            <div className="max-w-[640px]">
              {/* HEADER — SAME SYSTEM */}
              <div className="flex items-start gap-3">
                {/* stacked label */}
                <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 mt-[6px] text-right">
                  <span>Get</span>
                  <span>In</span>
                  <span>Touch</span>
                </div>

                {/* bar */}
                <div className="mt-[6px] h-[62px] w-[3px] bg-orange-600 rounded-full shrink-0" />

                {/* content column */}
                <div className="pl-1">
                  <h2 className="text-5xl font-semibold tracking-tight leading-[1] text-slate-900">
                    Contact Us
                  </h2>

                  <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-slate-700/80">
                    Tell us about your project requirements and our technical
                    team will get back to you with a tailored solution.
                  </p>
                </div>
              </div>

              {/* SERVICES + INQUIRY — aligned naturally */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Services */}
                <div>
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-[3px] bg-orange-600 rounded-full" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Services
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-1 text-[16px] text-slate-800/80">
                    {services.map((s) => (
                      <li key={s.title} className="flex items-start gap-3">
                        <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-orange-600" />
                        <span>{s.title}</span>
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
                    <Row icon={<Mail size={17} />} text="contactmarkandspark@gmail.com" />
                    <Row icon={<Phone size={17} />} text="+91 84480 26287 / +91 84489 74976" />
                    <Row icon={<Instagram size={17} />} text="@Mark_and_spark" />
                    <Row icon={<Youtube size={17} />} text="@Youtube" />
                    <Row icon={<MapPin size={17} />} text="E 77, DSIIDC Industrial Area, 110039" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — CAROUSEL */}
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 text-center">
                MARK &amp; SPARK
              </h3>

              <p className="mt-2 text-center text-[14px] leading-[1.45] text-slate-700/70">
                Mark &amp; Spark specializes in high-quality branding across metal,
                <br />
                merchandise, textiles, and prototypes.
              </p>

              {/* STACKED CAROUSEL */}
              <div className="mt-7 w-full max-w-[760px]">
                <div className="relative h-[260px]">
                  {/* left */}
                  <Card img={images[leftIdx]} className="-translate-x-[110%] opacity-30 scale-[0.96]" />
                  {/* right */}
                  <Card img={images[rightIdx]} className="translate-x-[10%] opacity-30 scale-[0.96]" />
                  {/* center */}
                  <Card img={images[active]} main />

                  {/* arrows */}
                  <NavBtn left onClick={prev} />
                  <NavBtn onClick={next} />
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

/* helpers */

function Row({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[3px] text-orange-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Card({ img, main, className = "" }) {
  return (
    <div
      className={`
        absolute left-1/2 ${main ? "top-0 -translate-x-1/2 w-[360px] h-[230px] rounded-[32px] opacity-100 shadow-md border-white/70 bg-white" : "top-[36px] w-[320px] h-[200px] rounded-[28px] border-white/50 bg-white/30"}
        overflow-hidden border
        ${className}
      `}
    >
      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" draggable={false} />
      {!main && <div className="absolute inset-0 bg-slate-900/10" />}
    </div>
  );
}

function NavBtn({ left, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        absolute top-[105px] left-1/2 w-10 h-10 rounded-full
        bg-white/90 border border-white/70 shadow grid place-items-center hover:bg-white
        ${left ? "-translate-x-[210px]" : "translate-x-[170px]"}
      `}
    >
      {left ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}
