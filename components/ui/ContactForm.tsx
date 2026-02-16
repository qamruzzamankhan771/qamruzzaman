"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "AI Integration",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setStatus("success")
                setFormData({ name: "", email: "", projectType: "AI Integration", message: "" })
            } else {
                setStatus("error")
            }
        } catch (err) {
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="border-white/20 text-white">
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Full Name</label>
                    <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Email Address</label>
                    <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Project Type</label>
                <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                >
                    <option>AI Integration</option>
                    <option>Backend Architecture</option>
                    <option>WordPress Automation</option>
                    <option>SaaS Development</option>
                    <option>Other / Not Sure</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Message</label>
                <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project context and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                </div>
            )}

            <Button
                disabled={status === "loading"}
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full rounded-xl py-6 text-lg font-bold group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
                {status === "loading" ? "Sending..." : (
                    <span className="flex items-center gap-2">
                        Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                )}
            </Button>
        </form>
    )
}
