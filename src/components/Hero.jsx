import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-44 pb-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT */}
        <Reveal>
          <div className="space-y-8">

            {/* Section Label */}
            <span className="inline-block text-xs uppercase tracking-[0.35em] text-slate-500">
              Industrial Laser Solutions
            </span>

            <div className="relative">
              <div className="absolute -left-6 top-2 h-20 w-[3px] bg-orange-600" />

              <h1 className="text-5xl font-semibold leading-tight text-slate-900">
                Precision Laser Printing
                <br />
                <span className="text-orange-600">
                  Built for Industry
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-600 max-w-xl">
              High-accuracy laser printing, engraving, and metal
              fabrication services designed for manufacturing,
              architecture, and heavy industrial production.
            </p>

            {/* CTAs */}
            <div className="flex gap-5 pt-4">
              <a
                href="#contact"
                className="px-9 py-3 bg-slate-900 text-white uppercase text-xs tracking-widest hover:bg-slate-950 transition"
              >
                Get a Quote
              </a>

              <a
                href="#services"
                className="px-9 py-3 border border-slate-900 text-slate-900 uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition"
              >
                Our Services
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200 max-w-lg">
              <div>
                <p className="text-2xl font-semibold text-slate-900">15+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">200+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Industrial Clients
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">98%</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Accuracy Rate
                </p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.2}>
          <div className="relative h-[460px] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/5" />

            {/* Center Text */}
            <span className="uppercase text-xs tracking-[0.35em] text-slate-700 z-10">
              CNC • LASER • METAL
            </span>

            {/* Industrial Details */}
            <div className="absolute top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-slate-400" />
            <div className="absolute bottom-5 left-5 w-12 h-12 border-b-2 border-l-2 border-slate-400" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
