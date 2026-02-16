import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import React from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-32 pb-20">
                <Section>
                    <article className="prose prose-invert prose-lg max-w-4xl mx-auto
            prose-headings:font-outfit prose-headings:font-bold
            prose-a:text-blue-500 hover:prose-a:text-blue-400
            prose-strong:text-white
            prose-code:text-blue-400 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-950 prose-pre:border prose-pre:border-white/5
            prose-img:rounded-2xl
          ">
                        {children}
                    </article>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
