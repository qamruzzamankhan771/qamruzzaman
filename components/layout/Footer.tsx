import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <Link href="/" className="text-2xl font-bold font-outfit tracking-tighter text-white">
                            QK<span className="text-blue-500">.</span>
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                            AI-Enabled Backend Developer specializing in scalable systems and automation.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Qamruzzaman Khan. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-muted-foreground">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
