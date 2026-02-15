import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-300 scroll-mt-[90px] py-16 sm:py-20 lg:py-24"
    >
      <div className="page-container">
        <div
          className="
            grid grid-cols-1 items-center
            gap-10 lg:gap-12 xl:gap-16
            lg:grid-cols-[minmax(0,1fr)_620px]
          "
        >
          {/* LEFT IMAGE */}
          <Reveal delay={0.1}>
            <div className="w-full">
              <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-white/40 shadow-sm">
                <Image
                  src="/about.jpg"
                  alt="About Mark & Spark"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-slate-900/10" />
              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTENT */}
          <Reveal delay={0.2}>
            <div className="w-full lg:w-[620px] lg:justify-self-end">
              <div className="flex items-start gap-4">
                {/* label + bar */}
                <div className="flex items-start gap-3 shrink-0">
                  <div className="flex flex-col text-[11px] leading-[14px] text-slate-700/70 mt-[10px] text-right">
                    <span>Who</span>
                    <span>We</span>
                    <span>Are</span>
                  </div>
                  <div className="mt-[10px] h-[62px] w-[3px] bg-orange-600 " />
                </div>

                {/* text */}
                <div className="min-w-0">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900">
                    About Mark &amp; Spark
                  </h2>

                  <div className="mt-5 space-y-6 text-[15px] text-slate-700 leading-relaxed">
                    {/* 2 lines (on lg+) */}
                    <p>
                      Mark &amp; Spark is a precision-driven branding and
                      fabrication studio specializing in laser engraving, custom
                      printing, and advanced manufacturing solutions.
                    </p>

                    {/* 4 lines (on lg+) */}
                    <p>
                      We work with brands, businesses, and creators to transform
                      ideas into high-quality physical products—whether it’s
                      engraved metal, branded merchandise, fabric prints, or
                      3D-printed components. Our process combines technical
                      accuracy with a strong understanding of brand identity,
                      ensuring every output reflects consistency, detail, and
                      durability.
                    </p>

                    {/* 2 lines (on lg+) */}
                    <p>
                      From one-off custom projects to scalable production
                      requirements, we focus on delivering reliable results that
                      help brands stand out with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
