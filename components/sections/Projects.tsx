"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trackCTA } from "@/lib/analytics";

const projects = [
    {
        title: "AI Content Generator for WordPress",
        description: "An AI-powered system that generates SEO-optimized blog posts using OpenAI API. Supports RAG for brand consistency and auto-publishes to WordPress. Built to reduce manual content effort by 80%.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        tech: ["Node.js", "OpenAI API", "RAG", "WordPress"],
        link: "#",
        github: "#"
    },
    {
        title: "PressStack",
        description: "Automates your WordPress foundation by setting up scalable theme structures and plugin configurations. Reduces development time drastically for agencies and developers.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
        tech: ["Next.js", "WordPress Automation", "System Design"],
        link: "#",
        github: "#"
    },
    {
        title: "SaaS Backend Automation",
        description: "Production-ready backend for SaaS platforms focusing on event-driven architecture and automated business logic integration.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0b?q=80&w=800&auto=format&fit=crop",
        tech: ["NestJS", "PostgreSQL", "n8n", "Vector DB"],
        link: "#",
        github: "#"
    }
];

export const Projects = () => {
    return (
        <Section id="projects" className="bg-background">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        Featured <span className="text-blue-500">Work</span>
                    </h2>
                    <p className="text-muted-foreground">
                        A selection of my recent projects involving complex backend systems, AI integrations, and high-performance web platforms.
                    </p>
                </div>
                <Button variant="outline" className="rounded-full border-white/10">
                    View All Projects
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <Card className="overflow-hidden border-white/5 h-full flex flex-col hover:border-blue-500/20 transition-all duration-500">
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60" />
                            </div>
                            <CardContent className="p-6 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <Link
                                        href={project.link}
                                        className="flex items-center gap-2 text-xs font-bold text-white hover:text-blue-500 transition-colors"
                                        onClick={() => trackCTA(`Project: ${project.title}`, "Projects Section")}
                                    >
                                        LIVE DEMO <ArrowUpRight size={14} />
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="text-muted-foreground hover:text-white transition-colors"
                                        onClick={() => trackCTA(`GitHub: ${project.title}`, "Projects Section")}
                                    >
                                        <Github size={18} />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
