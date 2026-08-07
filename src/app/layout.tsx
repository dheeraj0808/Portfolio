import type { Metadata } from "next";
import { Syne, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dheeraj Singh | Backend Software Engineer",
  description:
    "Backend-focused Software Engineer at Epic Web Service. Node.js, Express, MySQL, JWT auth systems — exploring Expo and system design.",
  metadataBase: new URL("https://dheerajsinghportfolio.vercel.app"),
  openGraph: {
    title: "Dheeraj Singh | Backend Software Engineer",
    description:
      "REST APIs, auth systems, and practical full-stack delivery. Exploring mobile and system design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
