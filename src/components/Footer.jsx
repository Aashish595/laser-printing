export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

        {/* LEFT – BRAND */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-slate-900">
            LaserPrint<span className="text-orange-600">.</span>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
            Precision laser printing, engraving, and industrial
            fabrication solutions built for accuracy, scale,
            and reliability.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-900 transition"
            >
              {/* LinkedIn */}
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98H4.8V24H.22zM8.98 8.98h4.4v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V24h-4.6v-6.64c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.73-2.55 3.51V24h-4.6z"/>
              </svg>
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-900 transition"
            >
              {/* Instagram */}
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.325 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.262-3.608 1.325-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.262-2.242-1.325-3.608C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.262 3.608-1.325C8.416 2.212 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4zm6.7-10.9a1.52 1.52 0 1 1-3.04 0 1.52 1.52 0 0 1 3.04 0z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* CENTER – MAP */}
        <div className="space-y-5">
          <h4 className="text-sm uppercase tracking-widest text-slate-700">
            Our Location
          </h4>

          <div className="w-full h-[220px] border border-slate-300 overflow-hidden">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          <p className="text-sm text-slate-600">
            Industrial Area, Sector 62<br />
            Noida, India
          </p>
        </div>

        {/* RIGHT – QUICK INFO */}
        <div className="space-y-5">
          <h4 className="text-sm uppercase tracking-widest text-slate-700">
            Contact
          </h4>

          <p className="text-sm text-slate-600">
            📧 sales@laserprint.co<br />
            ☎ +91 98765 43210
          </p>

          <p className="text-xs uppercase tracking-widest text-slate-500 pt-6">
            © {new Date().getFullYear()} LaserPrint Co.
          </p>
        </div>

      </div>
    </footer>
  );
}
