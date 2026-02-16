"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "/blog" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={cn(
                    "max-w-5xl mx-auto rounded-2xl transition-all duration-300",
                    scrolled ? "glass shadow-lg px-6 py-2" : "px-0"
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold font-outfit tracking-tighter text-white">
                        QK<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="gradient" size="sm" className="rounded-full" asChild>
                            <Link href="/contact">
                                Work With Me
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="gradient" className="w-full" asChild>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                Work With Me
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
