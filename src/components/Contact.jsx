export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold">Contact Us</h2>

        <form className="mt-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border px-4 py-3"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white uppercase text-sm tracking-wider"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
