import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        {/* LEFT */}
        <Reveal>
          <div className="space-y-8">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Who We Are
            </span>

            <div className="relative">
              <div className="absolute -left-6 top-2 h-16 w-[3px] bg-orange-600" />
              <h2 className="text-4xl font-semibold text-slate-900">
                About LaserPrint Co.
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-xl">
              LaserPrint Co. delivers industrial-grade laser printing,
              engraving, and metal fabrication solutions with uncompromising
              accuracy, durability, and repeatability.
            </p>

            <p className="text-slate-600 max-w-xl">
              Our infrastructure, machinery, and quality processes are
              engineered to meet strict manufacturing and production standards.
            </p>

            {/* 🔽 ADD THIS EXACTLY HERE */}
            <ul className="space-y-4 pt-6">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-orange-600">⚙</span>
                High-precision CNC & laser systems
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-orange-600">✔</span>
                ISO-aligned quality & safety standards
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-orange-600">🏭</span>
                Scalable production for industrial volumes
              </li>
            </ul>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.2}>
          <div className="relative h-[360px] bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
            <span className="uppercase text-xs tracking-[0.3em] text-slate-700 z-10">
              Factory Floor
            </span>

            <div className="absolute top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-slate-400" />
            <div className="absolute bottom-5 left-5 w-12 h-12 border-b-2 border-l-2 border-slate-400" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
