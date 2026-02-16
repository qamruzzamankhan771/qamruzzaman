"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
    Globe,
    Cpu,
    Workflow,
    ShoppingBag,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Web App Development",
        description: "SaaS platforms, admin dashboards, and custom backend systems built with Next.js, Node, Express, or NestJS for maximum scalability.",
        icon: <Globe className="h-8 w-8 text-blue-500" />
    },
    {
        title: "WordPress & WooCommerce",
        description: "Custom themes, performance optimization, and headless architecture with deep plugin and API integrations.",
        icon: <ShoppingBag className="h-8 w-8 text-orange-500" />
    },
    {
        title: "AI Integrations",
        description: "Custom AI chatbots, knowledge-based RAG systems, AI blog generators, and Vector DB implementations for your platform.",
        icon: <Cpu className="h-8 w-8 text-purple-500" />
    },
    {
        title: "Business Automation",
        description: "Custom Make and n8n workflows that automate repetitive tasks and create intelligent content/business pipelines.",
        icon: <Workflow className="h-8 w-8 text-cyan-500" />
    }
];

export const Services = () => {
    return (
        <Section id="services" className="bg-background/80">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
                        Services <br />
                        I <span className="text-blue-500">Provide</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Helping startups and agencies build robust technical foundations and leverage AI to stay ahead of the competition.
                    </p>
                    <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                        <h4 className="font-bold mb-2">Need a custom solution?</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            I'm available for long-term consulting and per-project basis.
                        </p>
                        <button className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                            GET IN TOUCH <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 h-full hover:bg-white/5 transition-all duration-300 group">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 w-fit mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
