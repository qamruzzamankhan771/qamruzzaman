"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
    {
        title: "How to Build a Production-Ready RAG System with Node.js and OpenAI",
        slug: "production-ready-rag-system",
        date: "Feb 16, 2026",
        description: "A comprehensive guide for SaaS founders on building scalable, grounding-based AI systems using Node.js and OpenAI's RAG architecture.",
        category: "AI Development",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <div className="pt-32 pb-20">
                <Section>
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold font-outfit mb-6"
                        >
                            Engineering <span className="text-blue-500">Insights</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground"
                        >
                            Deep dives into AI, backend architecture, and the future of automation.
                        </motion.p>
                    </div>

                    <div className="grid gap-12 max-w-4xl mx-auto">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <Card className="overflow-hidden hover:border-blue-500/30 transition-all group border-white/5 bg-white/5">
                                        <div className="grid md:grid-cols-5 gap-0">
                                            <div className="md:col-span-2 relative aspect-video md:aspect-auto">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="md:col-span-3 p-8">
                                                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">
                                                    <span className="flex items-center gap-1.5 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                                        <Tag size={12} /> {post.category}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                                        <Calendar size={12} /> {post.date}
                                                    </span>
                                                </div>
                                                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors font-outfit">
                                                    {post.title}
                                                </h2>
                                                <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                                                    {post.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                                                    READ ARTICLE <ArrowRight size={16} className="text-blue-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </div>
            <Footer />
        </>
    );
}
