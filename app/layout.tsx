import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PostHogProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qamruzzaman.in"),
  title: {
    default: "Qamruzzaman Khan | AI-Enabled Backend Developer",
    template: "%s | Qamruzzaman Khan"
  },
  description: "Senior Backend Developer specializing in Node.js, AI integrations, and WordPress automation. Building high-performance, scalable solutions for SaaS startups.",
  keywords: [
    "Backend Developer",
    "AI Integration",
    "Node.js Expert",
    "WordPress Automation",
    "SaaS Developer",
    "Qamruzzaman Khan",
    "RAG Implementation",
    "Backend Architecture"
  ],
  authors: [{ name: "Qamruzzaman Khan" }],
  creator: "Qamruzzaman Khan",
  publisher: "Qamruzzaman Khan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Qamruzzaman Khan | AI-Enabled Backend Developer",
    description: "Expert Backend & AI Automation Services for SaaS startups. Node.js, AI, and WordPress specialist.",
    url: "https://qamruzzaman.in",
    siteName: "Qamruzzaman Khan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qamruzzaman Khan | AI-Enabled Backend Developer",
    description: "Expert Backend & AI Automation Services.",
    creator: "@qamruzzaman", // Placeholder
  },
  alternates: {
    canonical: "/",
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <PostHogProvider>
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
