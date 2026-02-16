"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "20+" },
];

export const About = () => {
    return (
        <Section id="about" className="bg-background/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-6">
                        I Don’t Just Write Code — I Build <span className="text-blue-500">Systems That Scale</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        I’m a backend-focused developer specializing in Node.js, API architecture, and AI-driven automation. I help startups, agencies, and growing businesses bridge the gap between complex requirements and high-performance solutions.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium text-white/80">
                        If it needs backend logic, automation, or AI — I can build it.
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-2xl font-bold text-blue-500 mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 border-blue-500/20 bg-blue-500/5">
                        <h3 className="text-xl font-bold mb-6">Solving Business Challenges</h3>
                        <ul className="space-y-4">
                            {[
                                "Automate content & repetitive workflows",
                                "Integrate AI into existing platforms",
                                "Build scalable web applications",
                                "Improve performance and infrastructure",
                                "WordPress & WooCommerce Specialist"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0" />
                                    <span className="text-muted-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};
