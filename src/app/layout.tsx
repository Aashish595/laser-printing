import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark & Spark",
  description: "High-precision laser printing, engraving, and industrial fabrication solutions.",
  icons: {
    icon: "/logo.jpg",       
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Strict: this guarantees Poppins on the entire app */}
      <body className={`${poppins.className} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
