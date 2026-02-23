"use client";

import Reveal from "./Reveal";

const services = [
  { title: "Fiber Laser Engraving", src: "/fiberLaser.mp4" },
  { title: "Merchandise Printing", src: "/photo1.jpg" },
  { title: "3D Printing & Prototyping", src: "/3dPrint.mp4" },    
  { title: "Screen Printing", src: "/about.jpg" },
  { title: "CNC Machining Solutions", src: "/mainVideo.mp4" },    
  { title: "Fabric Printing", src: "/fabric.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-[90px]">
      <div className="py-24 lg:py-28">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 xl:gap-14 items-start">
            {/* LEFT TEXT */}
            <Reveal>
              <div className="flex lg:min-h-[500px] items-center">
                <div className="max-w-[560px] lg:justify-self-center">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col text-[11px] leading-[14px] text-slate-600/70 mt-[6px] -mr-1 text-right">
                      <span>What</span>
                      <span>We</span>
                      <span>Do</span>
                    </div>

                    <div className="mt-[6px] h-[62px] w-[5px] bg-orange-600 shrink-0" />

                    <div className="pl-1">
                      <h2 className="text-5xl font-semibold tracking-tight text-slate-900 leading-[1]">
                        Our Services
                      </h2>

                      <div className="mt-5 space-y-4 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">
                        <p>
                          We offer precision-driven branding and manufacturing
                          solutions designed to help businesses create
                          high-quality, durable, and consistent physical products.
                        </p>

                        <p>
                          From laser engraving to custom printing and prototyping,
                          our services are built to support brands at every stage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT GRID */}
            <Reveal delay={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {services.map((s) => (
                  <ServiceMediaCard key={s.title} title={s.title} src={s.src} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceMediaCard({ title, src }) {
  const isVideo = src?.toLowerCase().endsWith(".mp4");

  return (
    <div
      className="
        group relative overflow-hidden rounded-[22px]
        border border-slate-200 bg-slate-100
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-slate-300
        cursor-pointer h-full
      "
    >
      <div className="relative h-[220px] sm:h-[240px] lg:h-[200px] xl:h-[210px]">
        {isVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-90" />
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-[14px] font-semibold text-white drop-shadow">
          {title}
        </div>
      </div>

      <div
        className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition
          bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]
        "
      />
    </div>
  );
}