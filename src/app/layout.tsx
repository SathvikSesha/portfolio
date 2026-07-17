import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sesha Sathvik — Backend Engineer",
  description:
    "Sesha Sathvik, a backend engineer and Computer Science student at VIT-AP University building scalable systems with Java, Spring Boot, cloud infrastructure and AI.",
  keywords: [
    "Sesha Sathvik",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Node.js",
    "React",
    "AWS",
    "REST API",
    "System Design",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Sesha Sathvik" }],
  openGraph: {
    title: "Sesha Sathvik — Backend Engineer",
    description:
      "Sesha Sathvik, a backend engineer and Computer Science student at VIT-AP University building scalable systems with Java, Spring Boot, cloud infrastructure and AI.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: "Sesha Sathvik",
  publisher: "Sesha Sathvik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground bg-grain">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
