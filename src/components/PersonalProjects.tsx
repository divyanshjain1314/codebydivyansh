"use client"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Terminal, FlaskConical } from "lucide-react"

const personalLabs = [
    {
        title: "Tail Dashboard",
        description: "A modern, responsive admin dashboard built with advanced Tailwind CSS layouts.",
        link: "https://tail-dashboard.vercel.app/dashboard",
        tags: ["Next.js", "Tailwind CSS", "Charts"],
    },
    {
        title: "Design Studio",
        description: "Creative landing page for a digital agency focusing on high-end typography and motion.",
        link: "https://design-studio-murex.vercel.app/",
        tags: ["React", "Framer Motion", "UI/UX"],
    },
    {
        title: "BlueCare Hospital",
        description: "Healthcare management UI for appointment scheduling and patient records.",
        link: "https://bluecare-hospital.vercel.app/",
        tags: ["React", "State Management", "HealthTech"],
    },
    {
        title: "Calendar Scheduler",
        description: "Interactive calendar tool for managing events and daily schedules with drag-drop features.",
        link: "https://calender-schedular.vercel.app/",
        tags: ["JavaScript", "Event Handling", "UI Components"],
    },
    {
        title: "LeadCRM.co",
        description: "Personal CRM project focused on lead tracking and business management logic.",
        link: "https://leadcrmco.vercel.app/",
        tags: ["Full Stack", "Database", "Dashboard"],
    },
    {
        title: "PDF Merger App",
        description: "A utility tool to merge multiple PDF files directly in the browser.",
        link: "https://pdf-merger-app-opal.vercel.app/",
        tags: ["Utility", "Client-side Processing", "PDF-Lib"],
    }
]

export default function PersonalProjects() {
    return (
        <section id="personal-projects" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-950/50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                        <FlaskConical className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter">Personal Labs</h2>
                        <p className="text-zinc-500 dark:text-zinc-400">Experimental projects and utility tools built for learning.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {personalLabs.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Terminal className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                                        <a href={project.link} target="_blank" className="text-zinc-400 hover:text-blue-500">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">{project.title}</CardTitle>
                                    <CardDescription className="mt-2 line-clamp-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold tracking-widest bg-zinc-100 dark:bg-zinc-800">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}