"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
    Database,
    Layers,
    Workflow,
    Cloud,
    Cpu,
    Code2
} from "lucide-react";

const skillCategories = [
    {
        title: "Backend & API Architecture",
        icon: <Code2 className="text-blue-500" />,
        skills: ["Node.js", "Express", "NestJS", "REST APIs", "Authentication Systems", "Scalable Architecture"]
    },
    {
        title: "AI & Automation Engineering",
        icon: <Cpu className="text-purple-500" />,
        skills: ["OpenAI API", "RAG Architecture", "Vector Databases", "Prompt Engineering", "Make & n8n Automation", "AI Content Systems"]
    },
    {
        title: "Databases & Performance",
        icon: <Database className="text-green-500" />,
        skills: ["MySQL", "PostgreSQL", "Redis (AI Caching)", "Performance Optimization", "Prisma ORM"]
    },
    {
        title: "WordPress & CMS Systems",
        icon: <Layers className="text-orange-500" />,
        skills: ["Custom WordPress", "WooCommerce Integrations", "Headless WordPress", "Strapi CMS", "HubSpot Integrations"]
    },
    {
        title: "Cloud & Deployment",
        icon: <Cloud className="text-cyan-500" />,
        skills: ["AWS", "Vercel", "Production Workflows", "CI/CD", "EC2", "S3"]
    },
    {
        title: "Business Automation",
        icon: <Workflow className="text-red-500" />,
        skills: ["Process Automation", "Webhooks", "ERP Integrations", "Custom Logic", "Automation Pipelines"]
    }
];

export const Skills = () => {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                    Core <span className="text-blue-500">Expertise</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Deep technical knowledge in building scalable backends, intelligent AI systems, and seamless automation workflows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 h-full hover:border-blue-500/40 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-lg">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-muted-foreground border border-white/5 hover:text-white hover:bg-blue-500/10 hover:border-blue-500/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
