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
  title: "Dheeraj Singh | Backend Software Engineer — NestJS, RBAC, Payments",
  description:
    "Software Engineer L-1 at Epic Web Service. NestJS backends, 4-tier RBAC, Razorpay, Sequelize — builder of Wenuru and India-focused NPM packages (dheeraj08).",
  metadataBase: new URL("https://dheerajsinghportfolio.vercel.app"),
  openGraph: {
    title: "Dheeraj Singh | Backend Software Engineer",
    description:
      "Production NestJS platforms, auth/RBAC, payments webhooks, and open-source NPM packages.",
    type: "website",
    url: "https://dheerajsinghportfolio.vercel.app",
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
