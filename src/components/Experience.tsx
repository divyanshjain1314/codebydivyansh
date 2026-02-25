"use client"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
    {
        company: "Softinator Group of Industries",
        role: "Frontend Developer (Contract)",
        period: "Nov 2025 - Dec 2025",
        description: "Contributed to UI development for projects like Outliny, focusing on responsive design and modern interface components.",
        skills: ["Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
        company: "WebiWork Technologies PVT LTD",
        role: "Frontend Developer",
        period: "May 2025 - Nov 2025",
        description: "Developed complex platforms like TruvioAI (AI-driven rating management) and Core:IO (live-streaming dashboard).",
        skills: ["Next.js", "NestJS", "PostgreSQL", "Syncfusion"]
    },
    {
        company: "Zithas Technologies",
        role: "Frontend Developer",
        period: "Jan 2024 - Sep 2024",
        description: "Built EarthBMS (CRM) with RBAC and NutriConnect (Diet Management), focusing on Redux state management and optimized UI.",
        skills: ["React.js", "Redux", "Bootstrap", "JavaScript"]
    },
    {
        company: "CodeBetter",
        role: "React Developer (Internship)",
        period: "Feb 2023 - Aug 2023",
        description: "Gained hands-on experience in building scalable web applications using the React ecosystem. Focused on developing reusable UI components and managing complex application states with Redux. Collaborated with senior developers to implement clean code practices and participated in the full software development lifecycle to deliver high-quality frontend solutions.",
        skills: ["React.js", "Redux", "JavaScript"]
    },
    {
        company: "Discover WebTech",
        role: "Web Designer",
        period: "Sep 2022 - Dec 2022",
        description: "Design and development of responsive websites for clients, ensuring pixel-perfect UI and seamless user experience.",
        skills: ["Html", "Css", "Bootstrap"]
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">Work Experience</h2>

            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-12 ml-8 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] mt-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-950 bg-blue-500 shadow-sm" />

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-blue-500" />
                                    {exp.company}
                                </h3>
                                <span className="flex items-center gap-1 text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-tight">
                                {exp.role}
                            </p>

                            <p className="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="text-[10px] font-bold px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase tracking-widest">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}