"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2 } from "lucide-react"

const projects = [
  {
    title: "Outliny (Last Project)",
    description: "UI development focusing on clean page layouts and responsive design to improve user workflow.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://outliny.com",
    className: "md:col-span-2 md:row-span-2",
    type: "Industry"
  },
  {
    title: "TruvioAI",
    description: "Full-stack AI app to manage Google ratings using Puppeteer scraping and ChatGPT API.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
    link: "https://truvioai.com",
    className: "md:col-span-1 md:row-span-2",
    type: "AI & Fullstack"
  },
  {
    title: "Core:IO",
    description: "Live streaming dashboard with dynamic panels and Syncfusion integration.",
    tags: ["React.js", "Syncfusion", "Tailwind"],
    link: "#",
    className: "md:col-span-1 md:row-span-1",
    type: "Streaming"
  },
  {
    title: "Earth BMS",
    description: "Comprehensive CRM with RBAC, Finance, and Staff management modules.",
    tags: ["React", "Redux", "Bootstrap"],
    link: "#",
    className: "md:col-span-1 md:row-span-1",
    type: "CRM"
  },
  {
    title: "Revolut Clone",
    description: "Pixel-perfect frontend clone of Revolut's Safe Money page.",
    tags: ["React.js", "TypeScript", "Tailwind"],
    link: "#",
    className: "md:col-span-1 md:row-span-1",
    type: "UI/UX"
  },
  {
    title: "Putups",
    description: "Business management platform for fieldworker and service tracking.",
    tags: ["React.js", "Redux", "Google Maps"],
    link: "#",
    className: "md:col-span-1 md:row-span-1",
    type: "Management"
  },
  {
    title: "Glamour Decore",
    description: "Premium E-commerce catalog for interior décor items.",
    tags: ["React", "Bootstrap", "API Integration"],
    link: "https://www.glamourdecor.in",
    className: "md:col-span-1 md:row-span-1",
    type: "E-commerce"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter">Featured Work</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-lg">
            A collection of industrial projects and full-stack applications.
          </p>
        </div>
        <Badge variant="outline" className="text-sm py-1 px-4 rounded-full">
          {projects.length} Total Projects
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={project.className}
          >
            <Card className="group h-full flex flex-col justify-between overflow-hidden border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl">
              <CardHeader className="space-y-1">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                    {project.type}
                  </span>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" className="text-zinc-400 hover:text-blue-500 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-500 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 text-[10px] font-medium uppercase">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}