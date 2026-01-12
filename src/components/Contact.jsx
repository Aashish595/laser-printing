export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">

        <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Get In Touch
        </span>

        <h2 className="mt-4 text-4xl font-semibold text-slate-900">
          Contact Us
        </h2>

        <p className="mt-4 text-slate-600 max-w-xl">
          Tell us about your project requirements and our
          technical team will get back to you with a tailored
          solution.
        </p>

        <form className="mt-14 space-y-6">

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
    </section>
  );
}
