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
  metadataBase: new URL("https://seshasathvik.dev"),
  title: "Sesha Sathvik — Backend Engineer & Cloud Enthusiast",
  description:
    "Portfolio of Sesha Sathvik, a backend engineer and Computer Science student at VIT-AP University building scalable systems with Java, Spring Boot, cloud infrastructure and AI.",
  keywords: [
    "Sesha Sathvik",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Cloud Engineer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Sesha Sathvik" }],
  openGraph: {
    title: "Sesha Sathvik — Backend Engineer & Cloud Enthusiast",
    description:
      "Building scalable software, one system at a time. Explore projects, engineering journey and case studies.",
    type: "website",
  },
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
