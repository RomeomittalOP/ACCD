import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACCD — Air Cargo Club of Delhi | Connecting India's Air Cargo Legacy",
  description:
    "The Air Cargo Club of Delhi is India's most prestigious membership organisation for aviation leaders, logistics executives and air cargo professionals — since 1977.",
  keywords: [
    "Air Cargo Club of Delhi",
    "ACCD",
    "Air Cargo India",
    "Aviation Networking",
    "Delhi Cargo",
    "Logistics Community",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-navy-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
