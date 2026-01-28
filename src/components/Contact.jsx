"use client";

import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
          {/* LEFT: HEADER + FORM */}
          <div className="h-full">
            <div className="flex items-start gap-6">
              {/* small label */}
              <div className="text-xs uppercase tracking-[0.35em] text-slate-600 leading-5 pt-1">
                Get
                <br />
                In
                <br />
                Touch
              </div>

              {/* orange bar */}
              <div className="mt-1 h-16 w-[3px] bg-orange-600 rounded-full" />

              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                  Contact Us
                </h2>
                <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
                  Share your requirement—our team will reply with the best solution.
                </p>
              </div>
            </div>

            {/* FORM */}
            <form
              action="https://formspree.io/f/mvzroopo"
              method="POST"
              className="mt-10 bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-5"
            >
              {/* Formspree helpers */}
              <input type="hidden" name="_subject" value="New Lead — Mark & Spark" />
              <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900
                             focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900
                             focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900
                           focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
              />

              <textarea
                name="message"
                placeholder="Tell us what you want to make (material, quantity, deadline)…"
                rows={4}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900
                           focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 bg-slate-900 text-white
                           uppercase text-xs tracking-widest hover:bg-slate-950 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO + MAP (same height style) */}
          <div className="h-full flex flex-col gap-6">
            {/* INFO CARD */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h4 className="text-xs uppercase tracking-[0.35em] text-slate-600">
                Contact Information
              </h4>

              <div className="mt-5 space-y-3">
                <p className="flex items-center gap-3 text-sm text-slate-700">
                  <Mail size={16} className="text-orange-600" />
                  Contactmarkandspark@gmail.com
                </p>

                <p className="flex items-center gap-3 text-sm text-slate-700">
                  <Phone size={16} className="text-orange-600" />
                  +91 91844802628 / +91 844897497
                </p>

                <p className="flex items-center gap-3 text-sm text-slate-700">
                  <MapPin size={16} className="text-orange-600" />
                  E77, DSIIDC Industrial Area, New Delhi, India
                </p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-6 flex flex-wrap gap-3">
                <SocialLink href="https://instagram.com/" label="Instagram" icon={<Instagram size={16} />} />
                <SocialLink href="https://youtube.com/" label="YouTube" icon={<Youtube size={16} />} />
                <SocialLink href="https://linkedin.com/" label="LinkedIn" icon={<Linkedin size={16} />} />
              </div>
            </div>

            {/* MAP CARD */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex-1 min-h-[260px]">
              <iframe
                title="Mark & Spark Location"
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

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-700
                 hover:bg-white hover:border-slate-300 transition"
      aria-label={label}
    >
      <span className="text-orange-600">{icon}</span>
      {label}
    </a>
  );
}
