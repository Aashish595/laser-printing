import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Quality & Compliance
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-slate-900">
            Certified to Industrial Standards
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl">
            Our manufacturing processes and quality systems
            comply with internationally recognized industrial
            and safety standards.
          </p>
        </Reveal>

        {/* CERTIFICATION CARDS */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">

          {/* ISO 9001 */}
          <Reveal delay={0.1}>
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="text-orange-600 text-3xl mb-4">✔</div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                ISO 9001
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Quality Management
              </p>
            </div>
          </Reveal>

          {/* ISO 14001 */}
          <Reveal delay={0.2}>
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="text-orange-600 text-3xl mb-4">🌿</div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                ISO 14001
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Environmental Safety
              </p>
            </div>
          </Reveal>

          {/* CE */}
          <Reveal delay={0.3}>
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="text-orange-600 text-3xl mb-4">⚙</div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                CE Certified
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Machinery Compliance
              </p>
            </div>
          </Reveal>

          {/* RoHS */}
          <Reveal delay={0.4}>
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="text-orange-600 text-3xl mb-4">♻</div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                RoHS
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Hazard-Free Materials
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
