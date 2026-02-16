"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
    Mail,
    MessageSquare,
    ExternalLink,
    Send
} from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export const Contact = () => {
    return (
        <Section id="contact" className="pb-32">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold font-outfit mb-6">
                        Let's Build Something <br />
                        <span className="text-blue-500">Powerful</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        Have a backend challenge, AI idea, or automation need? I work with SaaS founders, WordPress businesses, startups, and agencies to build production-ready systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 border-white/5 bg-white/5">
                                <Mail className="h-10 w-10 text-blue-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Start a Project</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Direct inquiries and formal briefs. I usually respond within 24 hours.
                                </p>
                                <a href="mailto:qamruzzamankhan96@gmail.com" className="text-blue-400 font-bold hover:underline">
                                    qamruzzamankhan96@gmail.com
                                </a>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 border-white/5 bg-white/5">
                                <MessageSquare className="h-10 w-10 text-green-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Quick Chat</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Message me on WhatsApp for quick inquiries about AI or architecture.
                                </p>
                                <a href="https://wa.me/9380289771" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold hover:underline inline-flex items-center gap-2">
                                    WhatsApp Me <ExternalLink size={14} />
                                </a>
                            </Card>
                        </motion.div>
                    </div>

                    <div className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 border-white/10 bg-white/5 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
                                <ContactForm />
                            </Card>
                        </motion.div>
                    </div>
                </div>


            </div>
        </Section>
    );
};
