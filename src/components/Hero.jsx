import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-36 pb-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <Reveal>
          <h1 className="text-5xl font-semibold leading-tight text-[#0F172A]">
            Precision Laser Printing<br />
            <span className="text-[#C2410C]">Built for Industry</span>
          </h1>

          <p className="mt-6 text-lg text-[#475569] max-w-xl">
            High-accuracy laser printing, engraving, and fabrication
            solutions engineered for manufacturing, architecture,
            and industrial production.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-7 py-3 bg-[#0F172A] text-white uppercase text-sm tracking-wider hover:bg-[#020617] transition"
            >
              Get a Quote
            </a>

            <a
              href="#services"
              className="px-7 py-3 border border-[#0F172A] text-[#0F172A] uppercase text-sm tracking-wider hover:bg-[#0F172A] hover:text-white transition"
            >
              Our Services
            </a>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.2}>
          <div className="relative h-95 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <span className="uppercase text-sm tracking-widest text-slate-600">
              CNC / Laser Machine Image
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
