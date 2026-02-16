"use client"

import { motion } from "framer-motion"

interface ComparisonTableProps {
    data: {
        feature: string
        column1: string
        column2: string
    }[]
    header1: string
    header2: string
}

export const ComparisonTable = ({ data, header1, header2 }: ComparisonTableProps) => {
    return (
        <div className="my-12 overflow-x-auto rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/10 bg-blue-500/5">
                        <th className="p-5 text-sm font-bold uppercase tracking-wider text-blue-400">Feature</th>
                        <th className="p-5 text-sm font-bold uppercase tracking-wider text-white">{header1}</th>
                        <th className="p-5 text-sm font-bold uppercase tracking-wider text-white">{header2}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                            <td className="p-5 font-bold text-white/90">{row.feature}</td>
                            <td className="p-5 text-muted-foreground">{row.column1}</td>
                            <td className="p-5 text-muted-foreground">{row.column2}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
