import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ahmad Abul Fotouh | Backend Engineer",
  description: "Portfolio of Ahmad Abul Fotouh, a Bachelor of Engineering graduate, specializing in building scalable backend architectures, APIs, and robust systems.",

  openGraph: {
    title: "Ahmad Abul Fotouh | Backend Engineer Portfolio",
    description: "Explore my technical skills, tech stack, military leadership journey, and featured software projects.",
    url: "https://ahmad-abulfotouh-portfolio.vercel.app/",
    siteName: "Ahmad AbulFotouh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Abul Fotouh | Backend Engineer",
    description: "Backend Developer portfolio detailing engineering projects and skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080d14]">{children}</body>
    </html>
  );
}
