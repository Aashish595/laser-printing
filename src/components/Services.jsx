"use client";

import Reveal from "./Reveal";

const services = [
  { title: "Fiber Laser Engraving", img: "/services/fiber-laser.jpg" },
  { title: "Merchandise Printing", img: "/services/merch-print.jpg" },
  { title: "3D Printing & Prototyping", img: "/services/3d-print.jpg" },
  { title: "Screen Printing", img: "/services/screen-print.jpg" },
  { title: "Fabric Printing", img: "/services/fabric-print.jpg" },
  { title: "CNC Machining Solutions", img: "/services/cnc.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {/* match About/Contact: centered canvas with similar vertical rhythm */}
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6">

          {/* IMPORTANT: balanced columns + shared baseline */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 xl:gap-16 items-start">
            {/* LEFT CONTENT */}
            <Reveal>
              <div className="max-w-[560px]">
                <div className="flex items-start gap-3">
                  {/* STACKED LABEL */}
                  <div className="flex flex-col text-[11px] leading-[14px] text-slate-600/70 mt-[6px] -mr-1">
                    <span>What</span>
                    <span>We</span>
                    <span>Do</span>
                  </div>

                  {/* ORANGE BAR */}
                  <div className="mt-[6px] h-[62px] w-[3px] bg-orange-600 rounded-full shrink-0" />

                  {/* Heading block starts tight to bar */}
                  <div className="pl-1">
                    <h2 className="text-5xl font-semibold tracking-tight text-slate-900 leading-[1]">
                      Our Services
                    </h2>

                    <p className="mt-6 text-[16px] text-slate-600 leading-relaxed">
                      We offer precision-driven branding and manufacturing
                      solutions designed to help businesses create high-quality,
                      durable, and consistent physical products.
                    </p>

                    <p className="mt-4 text-[16px] text-slate-600 leading-relaxed">
                      From laser engraving to custom printing and prototyping,
                      our services are built to support brands at every stage.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT GRID (aligned to the same top baseline as left) */}
            <Reveal delay={0.12}>
              <div className="w-full">
                {/* optional: gives same top “air” as left header */}
                <div className="mt-[6px]" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((s) => (
                    <ServiceMediaCard
                      key={s.title}
                      title={s.title}
                      img={s.img}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CARD ---------- */

function ServiceMediaCard({ title, img }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-slate-200 bg-slate-100
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-slate-300
        cursor-pointer
      "
    >
      <div className="relative h-36 sm:h-40 lg:h-44">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-90" />
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-sm font-semibold text-white drop-shadow">
          {title}
        </div>
      </div>

      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
          bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]
        "
      />
    </div>
  );
}
