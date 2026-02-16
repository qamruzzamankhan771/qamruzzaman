import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Enabled Backend Developer | Node.js & WordPress Specialist",
  description: "I help SaaS startups build scalable backend architectures and integrate cutting-edge AI features. Senior Developer with expertise in Node.js, Strapi, and RAG systems.",
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Qamruzzaman Khan",
    "jobTitle": "Senior Backend Developer",
    "description": "Expert in Node.js, AI Integration, and Backend Architecture.",
    "url": "https://qamruzzaman.me",
    "sameAs": [
      "https://github.com/qamruzzamankhan771",
      "https://www.linkedin.com/in/qamruzzaman-khan" // Placeholder
    ],
    "knowsAbout": ["Node.js", "AI", "RAG", "WordPress", "Backend Development", "SaaS Development"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
