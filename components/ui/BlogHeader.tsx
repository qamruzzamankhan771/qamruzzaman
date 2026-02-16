"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Tag, Clock } from "lucide-react"

interface BlogHeaderProps {
    title: string
    description: string
    date: string
    category: string
    readingTime: string
    banner: string
}

export const BlogHeader = ({ title, description, date, category, readingTime, banner }: BlogHeaderProps) => {
    return (
        <div className="mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video md:aspect-[21/9] w-full rounded-2xl overflow-hidden mb-8 border border-white/5"
            >
                <img
                    src={banner}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-blue-400">
                    <span className="flex items-center gap-1.5 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        <Tag size={12} /> {category}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar size={12} /> {date}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock size={12} /> {readingTime}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-tight">
                    {title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-blue-500/30 pl-6 py-2">
                    {description}
                </p>
            </motion.div>
        </div>
    )
}
