"use client";

import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-300">
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              {/* HEADER: very tight like reference */}
              <div className="flex items-start gap-3">
                {/* vertical label (tight) */}
                <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 mt-[6px]">
                  <span>Get</span>
                  <span>In</span>
                  <span>Touch</span>
                </div>

                {/* orange bar (close to title) */}
                <div className="mt-[6px] h-[62px] w-[3px] bg-orange-600 rounded-full" />

                {/* title + description (start exactly from same x) */}
                <div className="pl-1">
                  <h2 className="text-[64px] leading-[1] font-semibold tracking-tight text-slate-900">
                    Contact Us
                  </h2>

                  <p className="mt-6 max-w-[720px] text-[18px] leading-relaxed text-slate-700/80">
                    Tell us about your project requirements and our technical
                    team will get back to you with a tailored solution.
                  </p>
                </div>
              </div>

              {/* SERVICES + INQUIRY */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Services */}
                <div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-[3px] bg-orange-600 rounded-full" />
                    <h3 className="text-3xl font-semibold text-slate-900">
                      Services
                    </h3>
                  </div>

                  <ul className="mt-10 space-y-6 text-[18px] text-slate-800/80">
                    {[
                      "Fiber Laser Engraving",
                      "Merchandise Printing",
                      "3D Printing & Prototyping",
                      "Fabric Printing",
                      "Screen Printing",
                      "CNC Machining Solutions",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-orange-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquiry */}
                <div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-[3px] bg-orange-600 rounded-full" />
                    <h3 className="text-3xl font-semibold text-slate-900">
                      Inquiry
                    </h3>
                  </div>

                  <div className="mt-10 space-y-6 text-[18px] text-slate-800/80">
                    <Row
                      icon={<Mail size={18} />}
                      text="Contactmarkandspark@gmail.com"
                    />
                    <Row
                      icon={<Phone size={18} />}
                      text="+91 84480 26287 / +91 84489 74976"
                    />
                    <Row
                      icon={<Instagram size={18} />}
                      text="@Mark_and_spark"
                    />
                    <Row icon={<Youtube size={18} />} text="@Youtube" />
                    <Row
                      icon={<MapPin size={18} />}
                      text="E 77, DSIIDC Industrial Area, 110039"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (centered like reference) */}
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-semibold tracking-tight text-slate-900 text-center">
                MARK &amp; SPARK
              </h3>

              <p className="mt-3 max-w-[520px] text-center text-[16px] leading-relaxed text-slate-700/70">
                Mark &amp; Spark specializes in high-quality branding across
                metal, merchandise, textiles, and prototypes—built to represent
                your brand with accuracy.
              </p>

              {/* MAP STACK (centered) */}
              <div className="mt-10 relative w-full max-w-[640px] h-[320px]">
                {/* back cards */}
                <div className="absolute left-1/2 top-[72px] -translate-x-1/2 w-[82%] h-[70%] rounded-3xl overflow-hidden border border-white/40 bg-slate-200 shadow-sm opacity-30">
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>
                <div className="absolute left-1/2 top-[56px] -translate-x-1/2 w-[88%] h-[70%] rounded-3xl overflow-hidden border border-white/40 bg-slate-200 shadow-sm opacity-45">
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>

                {/* main card */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[94%] h-[82%] rounded-3xl overflow-hidden border border-white/60 bg-white shadow-md">
                  <iframe
                    title="Mark & Spark Location"
                    src="https://www.google.com/maps?q=28.6273,77.3780&z=15&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="mt-10 text-center text-xs tracking-widest text-slate-700/60">
                © 2026 LASERPRINT CO.
              </p>

              {/* WhatsApp (bottom-right like reference) */}
              <a
                href="https://wa.me/918448026287"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="fixed bottom-6 right-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-500 grid place-items-center shadow-lg">
                  <WhatsappGlyph />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* small row helper */
function Row({ icon, text }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-[3px] text-orange-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

/* inline whatsapp svg so it looks real */
function WhatsappGlyph() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 3C9.372 3 4 8.15 4 14.5c0 2.482.85 4.78 2.296 6.63L5 29l7.03-1.83A12.62 12.62 0 0 0 16 26c6.628 0 12-5.15 12-11.5S22.628 3 16 3Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M13.87 10.26c-.22-.49-.45-.5-.66-.51h-.56c-.19 0-.49.07-.75.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 1.99 3.16 4.92 4.3 2.43.95 2.93.76 3.46.71.53-.05 1.71-.71 1.95-1.4.24-.69.24-1.29.17-1.4-.07-.11-.26-.18-.56-.33-.3-.15-1.71-.85-1.97-.95-.26-.1-.45-.15-.64.15-.19.3-.74.95-.9 1.14-.16.19-.33.22-.63.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.62-1.55-.86-2.07Z"
        fill="#22c55e"
      />
    </svg>
  );
}
