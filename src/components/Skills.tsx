"use client"
import { motion } from "framer-motion"
import {
    Code2, FileCode2, Globe, Cpu,
    Layers, Zap, Database, Terminal
} from "lucide-react"

const skills = [
    { name: "React", icon: <Zap className="w-6 h-6 text-blue-400" /> },
    { name: "Next.js", icon: <Layers className="w-6 h-6 text-white" /> },
    { name: "TypeScript", icon: <FileCode2 className="w-6 h-6 text-blue-500" /> },
    { name: "Tailwind CSS", icon: <Globe className="w-6 h-6 text-cyan-400" /> },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6 text-yellow-400" /> },
    { name: "Node.js", icon: <Terminal className="w-6 h-6 text-green-500" /> },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6 text-indigo-400" /> },
    { name: "Git", icon: <Cpu className="w-6 h-6 text-orange-500" /> },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">My Tech Stack</h2>
                <p className="text-muted-foreground mt-2">Tools I use to bring ideas to life</p>
            </div>

            {/* Marquee Wrapper */}
            <div className="flex overflow-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-8 py-4"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {/* Duplicating skills for infinite loop */}
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-white dark:bg-zinc-800 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm"
                        >
                            {skill.icon}
                            <span className="font-semibold text-lg">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}