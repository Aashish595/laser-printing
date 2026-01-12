import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-16">

        {/* BRAND */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-slate-900">
            LaserPrint<span className="text-orange-600">.</span>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
            Precision laser printing, engraving, and industrial fabrication
            solutions built for accuracy, scale, and reliability.
          </p>
        </div>

        {/* LOCATION */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest text-slate-700">
            Location
          </h4>

          <p className="text-sm text-slate-600 leading-relaxed">
            Industrial Area, Sector 62<br />
            Noida, India
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-5">
          <h4 className="text-sm uppercase tracking-widest text-slate-700">
            Contact
          </h4>

          <div className="space-y-3 text-sm">

            {/* Email */}
            <a
              href="mailto:sales@laserprint.co"
              className="flex items-center gap-3 text-slate-600 hover:text-orange-600 transition"
            >
              <Mail size={16} />
              <span className="hover:underline underline-offset-4">
                sales@laserprint.co
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-slate-600 hover:text-orange-600 transition"
            >
              <Phone size={16} />
              <span className="hover:underline underline-offset-4">
                +91 98765 43210
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/laserprintco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-600 hover:text-orange-600 transition"
            >
              <Instagram size={16} />
              <span className="hover:underline underline-offset-4">
                Instagram
              </span>
            </a>

          </div>

          {/* COPYRIGHT */}
          <p className="text-xs uppercase tracking-widest text-slate-500 pt-6">
            © {new Date().getFullYear()} LaserPrint Co.
          </p>
        </div>

      </div>
    </footer>
  );
}
