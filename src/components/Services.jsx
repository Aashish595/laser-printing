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
    <section id="services" className="bg-white scroll-mt-[90px]">
      {/* ✅ match About/Contact spacing */}
      <div className="py-24 lg:py-28">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-14 items-start">
            {/* LEFT */}
            <Reveal>
              <div className="max-w-[560px] font-sans">
                <div className="flex items-start gap-3">
                  {/* stacked label */}
                  <div className="flex flex-col text-[11px] leading-[14px] text-slate-600/70 mt-[6px] -mr-1">
                    <span>What</span>
                    <span>We</span>
                    <span>Do</span>
                  </div>

                  {/* bar */}
                  <div className="mt-[6px] h-[62px] w-[3px] bg-orange-600 rounded-full shrink-0" />

                  {/* title + copy */}
                  <div className="pl-1">
                    <h2 className="text-5xl font-semibold tracking-tight text-slate-900 leading-[1]">
                      Our Services
                    </h2>

                    <p className="mt-5 text-[15px] md:text-[16px] font-normal text-slate-600 leading-relaxed">
                      We offer precision-driven branding and manufacturing solutions designed
                      to help businesses create high-quality, durable, and consistent physical products.
                    </p>

                    <p className="mt-4 text-[15px] md:text-[16px] font-normal text-slate-600 leading-relaxed">
                      From laser engraving to custom printing and prototyping, our services are built
                      to support brands at every stage.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.12}>
              <div className="w-full font-sans">
                {/* align top baseline with left */}
                <div className="mt-[6px]" />

                {/* cards: 2 cols on large, 3 only on xl so not too small */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {services.map((s) => (
                    <ServiceMediaCard key={s.title} title={s.title} img={s.img} />
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

function ServiceMediaCard({ title, img }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-slate-200 bg-slate-100
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-slate-300
        cursor-pointer font-sans
      "
    >
      <div className="relative h-40 sm:h-44">
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
