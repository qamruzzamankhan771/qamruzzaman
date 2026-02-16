import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Mail, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/ui/ContactForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact | Hire AI-Enabled Backend Developer",
    description: "Get in touch for AI integrations, backend architecture, or WordPress automation projects. Available for consultations and long-term contracts.",
}

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-20">
                <Section>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
                                Start Your <span className="text-blue-500">Project</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Ready to build something powerful? Fill out the form below or reach out directly via email or WhatsApp.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Contact Info */}
                            <div className="lg:col-span-1 space-y-6">
                                <Card className="p-6 border-white/5 bg-white/5">
                                    <Mail className="h-8 w-8 text-blue-500 mb-4" />
                                    <h3 className="font-bold mb-2">Email Me</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Direct inquiries and formal briefs.</p>
                                    <a href="mailto:qamruzzamankhan96@gmail.com" className="text-blue-400 font-medium hover:underline">
                                        qamruzzamankhan96@gmail.com
                                    </a>
                                </Card>
                                <Card className="p-6 border-white/5 bg-white/5">
                                    <MessageSquare className="h-8 w-8 text-green-500 mb-4" />
                                    <h3 className="font-bold mb-2">WhatsApp Chat</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Quick technical consultations.</p>
                                    <a href="https://wa.me/9380289771" className="text-green-500 font-medium hover:underline">
                                        +91 9380289771
                                    </a>
                                </Card>
                            </div>

                            {/* Form */}
                            <div className="lg:col-span-2">
                                <Card className="p-8 border-white/10 bg-white/5">
                                    <ContactForm />
                                </Card>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    )
}
