import Reveal from "./Reveal";

const services = [
  "Laser Cutting",
  "Laser Engraving",
  "Industrial Printing",
  "Custom Fabrication",
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <h2 className="text-3xl font-semibold text-[#0F172A]">
            Industrial Services
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Reveal key={service} delay={i * 0.1}>
              <div className="p-6 border border-slate-200 hover:border-[#C2410C] transition">
                <h3 className="text-lg font-medium text-[#0F172A]">
                  {service}
                </h3>
                <p className="mt-3 text-sm text-[#64748B]">
                  Precision-engineered solutions for industrial production.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
