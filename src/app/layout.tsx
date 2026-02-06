import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular + SemiBold etc.
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaserPrint Co. | Precision Industrial Printing",
  description:
    "High-precision laser printing, engraving, and industrial fabrication solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
