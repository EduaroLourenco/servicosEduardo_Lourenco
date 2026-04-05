import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecossistema Studio | Engenharia & Gestão",
  description: "Transformamos o caos operacional em um ecossistema digital lucrativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-brand-primary selection:text-black">
        <Navigation />
        <main className="flex-1 pb-32 lg:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
