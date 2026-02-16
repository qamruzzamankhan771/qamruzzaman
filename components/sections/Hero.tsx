"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Calendar } from "lucide-react";
import React from "react";
import Link from "next/link";
import { trackCTA } from "@/lib/analytics";

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase text-blue-400 border border-blue-400/20 rounded-full bg-blue-400/5">
                            Available for Freelancing & Consulting
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-outfit tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-[1.1]">
                            Qamruzzaman <br className="hidden md:block" />
                            <span className="text-blue-500">Khan</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-muted-foreground font-medium mb-10 max-w-2xl mx-auto tracking-tight">
                            AI-Enabled Backend Developer
                        </p>
                        <div className="space-y-6 mb-16">
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-80">
                                I build scalable backend systems, AI-powered applications, and automation workflows that help businesses move faster and reduce operational overhead.
                            </p>
                            <p className="text-lg md:text-xl text-blue-400 font-medium max-w-2xl mx-auto leading-relaxed">
                                From WordPress automation to full-stack SaaS systems — I ship production-ready solutions with AI built in.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    variant="gradient"
                                    className="rounded-full px-12 py-7 text-lg font-bold group shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer"
                                    asChild
                                    onClick={() => trackCTA("Work With Me", "Hero")}
                                >
                                    <Link href="/contact" className="cursor-pointer">
                                        Work With Me
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Hero Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
