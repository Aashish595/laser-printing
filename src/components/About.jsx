import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        <Reveal>
          <div className="border-l-4 border-[#C2410C] pl-6">
            <h2 className="text-3xl font-semibold text-[#0F172A]">
              About Our Company
            </h2>

            <p className="mt-6 text-[#475569] leading-relaxed">
              LaserPrint Co. delivers industrial-grade laser printing
              solutions with uncompromising accuracy, durability,
              and repeatability.
            </p>

            <p className="mt-4 text-[#475569]">
              Our infrastructure and processes are designed
              to meet strict technical and production standards.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="h-[320px] bg-slate-100 flex items-center justify-center text-slate-500 uppercase text-sm tracking-widest">
            Factory Floor Image
          </div>
        </Reveal>

      </div>
    </section>
  );
}
