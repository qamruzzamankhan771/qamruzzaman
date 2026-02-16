import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogList } from "@/components/sections/BlogList";

export const metadata = {
    title: "Engineering Insights | Qamruzzaman Khan",
    description: "Deep dives into AI integration, backend architecture, and RAG systems. Explore technical guides for SaaS founders and developers.",
}

const posts = [
    {
        title: "How to Build a Production-Ready RAG System with Node.js and OpenAI",
        slug: "production-ready-rag-system",
        date: "Feb 16, 2026",
        description: "A comprehensive guide for SaaS founders on building scalable, grounding-based AI systems using Node.js and OpenAI's RAG architecture.",
        category: "AI Development",
        image: "/images/Blog1-Banner.png"
    },
    {
        title: "WordPress vs Strapi: Which CMS is Better for Scalable Projects?",
        slug: "wordpress-vs-strapi-scalable-projects",
        date: "Feb 16, 2026",
        description: "A deep dive into choosing the right CMS architecture for 2026. Comparing architecture, scalability, and AI readiness for SaaS startups.",
        category: "Backend Architecture",
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <div className="pt-32 pb-20">
                <Section>
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
                            Engineering <span className="text-blue-500">Insights</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Deep dives into AI, backend architecture, and the future of automation.
                        </p>
                    </div>

                    <BlogList posts={posts} />
                </Section>
            </div>
            <Footer />
        </>
    );
}
