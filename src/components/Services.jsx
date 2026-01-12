import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-slate-900">
            Our Services
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl">
            We provide end-to-end laser-based manufacturing
            services designed for accuracy, repeatability,
            and industrial-scale production.
          </p>
        </Reveal>

        {/* SERVICES GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* SERVICE 1 */}
          <Reveal delay={0.1}>
            <div className="border border-slate-200 p-8 bg-white">
              <div className="text-orange-600 text-3xl">🔦</div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                Laser Cutting
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Precision cutting of metals and industrial materials
                with micron-level accuracy.
              </p>
            </div>
          </Reveal>

          {/* SERVICE 2 */}
          <Reveal delay={0.2}>
            <div className="border border-slate-200 p-8 bg-white">
              <div className="text-orange-600 text-3xl">🖨</div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                Laser Engraving
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Permanent, high-resolution marking for parts,
                components, and industrial identification.
              </p>
            </div>
          </Reveal>

          {/* SERVICE 3 */}
          <Reveal delay={0.3}>
            <div className="border border-slate-200 p-8 bg-white">
              <div className="text-orange-600 text-3xl">⚙</div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                CNC Fabrication
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Complex CNC machining and fabrication for
                industrial and architectural applications.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
