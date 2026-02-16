"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { trackCTA } from "@/lib/analytics";

interface Post {
    title: string;
    slug: string;
    date: string;
    description: string;
    category: string;
    image: string;
}

interface BlogListProps {
    posts: Post[];
}

export const BlogList = ({ posts }: BlogListProps) => {
    return (
        <div className="grid gap-12 max-w-4xl mx-auto">
            {posts.map((post, index) => (
                <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Link
                        href={`/blog/${post.slug}`}
                        className="cursor-pointer block"
                        onClick={() => trackCTA(`Blog: ${post.title}`, "Blog List")}
                    >
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
    );
};
