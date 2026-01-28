"use client";

import Reveal from "./Reveal";

const services = [
  {
    title: "Fiber Laser Engraving",
    img: "/services/fiber-laser.jpg",
  },
  {
    title: "Merchandise Printing",
    img: "/services/merch-print.jpg",
  },
  {
    title: "3D Printing & Prototyping",
    img: "/services/3d-print.jpg",
  },
  {
    title: "Screen Printing",
    img: "/services/screen-print.jpg",
  },
  {
    title: "Fabric Printing",
    img: "/services/fabric-print.jpg",
  },
  {
    title: "CNC Machining Solutions",
    img: "/services/cnc.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.25fr] gap-12 xl:gap-16 items-center">
          {/* LEFT CONTENT */}
          <Reveal>
            <div className="max-w-xl">
              <div className="flex items-start gap-6">
                {/* stacked label */}
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500 leading-5 pt-1">
                  What
                  <br />
                  We
                  <br />
                  Do
                </div>

                {/* orange bar */}
                <div className="mt-1 h-20 w-[3px] bg-orange-600 rounded-full" />

                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                    Our Services
                  </h2>

                  <p className="mt-5 text-slate-600 leading-relaxed">
                    We offer precision-driven branding and manufacturing solutions designed
                    to help businesses create high-quality, durable, and consistent physical
                    products.
                  </p>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    From laser engraving to custom printing and prototyping, our services are
                    built to support brands at every stage.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT GRID */}
          <Reveal delay={0.12}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceMediaCard key={s.title} title={s.title} img={s.img} />
              ))}
            </div>
          </Reveal>
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
      {/* IMAGE */}
      <div className="relative h-36 sm:h-40 lg:h-44">
        {/* Use img tag so it works without Next/Image */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />

        {/* dark overlay for readable title */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-90" />
      </div>

      {/* TITLE */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-sm font-semibold text-white drop-shadow">
          {title}
        </div>
      </div>

      {/* subtle shine hover */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
          bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]
        "
      />
    </div>
  );
}
