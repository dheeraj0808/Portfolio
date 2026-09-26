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
  title: "Dheeraj Singh | Software Engineer — Node.js, NestJS, TypeScript, React, SQL, AWS",
  description:
    "Software Engineer at Epic Web Service. TypeScript, Node.js, NestJS backends, React/Next.js, AWS (Amazon Web Services), Razorpay, Sequelize — builder of Wenuru, Vaidban, and NPM packages.",
  metadataBase: new URL("https://dheerajsinghportfolio.vercel.app"),
  openGraph: {
    title: "Dheeraj Singh | Software Engineer",
    description:
      "Production TypeScript & NestJS platforms, AWS cloud deployment, auth/RBAC, payments, and open-source NPM packages.",
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
