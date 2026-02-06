"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918448026287"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-16 h-16 rounded-2xl
        bg-[#25D366]
        grid place-items-center
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        hover:scale-105 active:scale-95
        transition-transform
      "
    >
      {/* WhatsApp SVG (crisp & recognizable) */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 3C9.372 3 4 8.15 4 14.5c0 2.482.85 4.78 2.296 6.63L5 29l7.03-1.83A12.62 12.62 0 0 0 16 26c6.628 0 12-5.15 12-11.5S22.628 3 16 3Z"
          fill="white"
        />
        <path
          d="M13.87 10.26c-.22-.49-.45-.5-.66-.51h-.56c-.19 0-.49.07-.75.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 1.99 3.16 4.92 4.3 2.43.95 2.93.76 3.46.71.53-.05 1.71-.71 1.95-1.4.24-.69.24-1.29.17-1.4-.07-.11-.26-.18-.56-.33-.3-.15-1.71-.85-1.97-.95-.26-.1-.45-.15-.64.15-.19.3-.74.95-.9 1.14-.16.19-.33.22-.63.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.62-1.55-.86-2.07Z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
}
