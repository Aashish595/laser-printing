import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT – HEADING + FORM */}
          <div className="space-y-12">

            {/* HEADER */}
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Get In Touch
              </span>

              <h2 className="mt-4 text-4xl font-semibold text-slate-900">
                Contact Us
              </h2>

              <p className="mt-4 text-slate-600">
                Tell us about your project requirements and our technical team
                will get back to you with a tailored solution.
              </p>
            </div>

            {/* FORM */}
            <form className="bg-white border border-slate-200 rounded-xl shadow-sm p-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 px-4 py-3 text-sm
                           focus:outline-none focus:border-slate-900"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-slate-300 px-4 py-3 text-sm
                           focus:outline-none focus:border-slate-900"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-slate-300 px-4 py-3 text-sm
                           focus:outline-none focus:border-slate-900"
              />

              <button
                type="submit"
                className="px-8 py-3 bg-slate-900 text-white
                           uppercase text-xs tracking-widest
                           hover:bg-slate-950 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT – INFO + MAP */}
          <div className="space-y-8">

            {/* CONTACT INFO */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 space-y-5">
              <h4 className="text-sm uppercase tracking-widest text-slate-700">
                Contact Information
              </h4>

              <p className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={16} /> sales@laserprint.co
              </p>

              <p className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={16} /> +91 98765 43210
              </p>

              <p className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} />
                Industrial Area, Sector 62, Noida
              </p>
            </div>

            {/* MAP */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm h-95">
              <iframe
                title="Client Location"
                src="https://www.google.com/maps?q=28.6273,77.3780&z=15&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
