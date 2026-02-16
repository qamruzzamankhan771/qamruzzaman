import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Qamruzzaman Khan | AI-Enabled Backend Developer",
  description: "Senior Backend Developer specializing in Node.js, AI integrations, and WordPress automation. Building high-performance, scalable solutions.",
  keywords: ["Backend Developer", "AI Integration", "Node.js", "WordPress Automation", "SaaS Developer", "Qamruzzaman Khan"],
  authors: [{ name: "Qamruzzaman Khan" }],
  openGraph: {
    title: "Qamruzzaman Khan | AI-Enabled Backend Developer",
    description: "Expert Backend & AI Automation Services.",
    type: "website",
    locale: "en_US",
    url: "https://qkhan.dev", // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable,
          outfit.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
