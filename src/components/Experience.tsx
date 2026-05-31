"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Born West Private Limited",
    domain: "bornwest.com",
    logo: "https://cdn.prod.website-files.com/67a3e787e402e810de013ee7/67e3092aea7304aeb9a9d648_logo-horizontal.svg",
    logoBg: "bg-[#ddd]",
    role: "Frontend Engineer",
    period: "Apr 2026 - Present",
    description:
      "Spearheading frontend development for the Born West platform by engineering complex, scalable features with Next.js and TypeScript. Leveraging AI-powered development tools to accelerate the software development lifecycle, optimize code performance, and automate architectural refactoring for high-impact results.",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Scss"],
  },
  {
    company: "Softinator Group of Industries",
    domain: "softinator.com",
    logoBg: "bg-[#0e1937]",
    logo: "https://res.cloudinary.com/project-airr/image/upload/v1538378820/softinator_logo_mgowhc.svg",
    role: "Frontend Developer (Contract)",
    period: "Nov 2025 - Dec 2025",
    description:
      "Contributed to UI development for projects like Outliny, focusing on responsive design and modern interface components.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    company: "WebiWork Technologies PVT LTD",
    domain: "webiwork.com",
    logoBg: "bg-white",
    logo: "https://webiwork.com/wp-content/uploads/2024/02/logo-175x48.png",
    role: "Frontend Developer",
    period: "May 2025 - Nov 2025",
    description:
      "Developed complex platforms like TruvioAI (AI-driven rating management) and Core:IO (live-streaming dashboard).",
    skills: ["Next.js", "NestJS", "PostgreSQL", "Syncfusion"],
  },
  {
    company: "Zithas Technologies",
    domain: "zithas.in",
    logoBg: "bg-white",
    logo: "https://res.cloudinary.com/ztpl-images/image/upload/q_auto,f_auto,fl_lossy/v1659376912/website/logo/zithas-logo-og_qruynr.png",
    role: "Frontend Developer",
    period: "Jan 2024 - Sep 2024",
    description:
      "Built EarthBMS (CRM) with RBAC and NutriConnect (Diet Management), focusing on Redux state management and optimized UI.",
    skills: ["React.js", "Redux", "Bootstrap", "JavaScript"],
  },
  {
    company: "CodeBetter",
    domain: "codebetter.in",
    logoBg: "bg-white",
    logo: "https://codebetter.in/images/companyLogo/codebetter-logo.svg",
    role: "React Developer (Internship)",
    period: "Feb 2023 - Aug 2023",
    description:
      "Gained hands-on experience in building scalable web applications using the React ecosystem. Focused on developing reusable UI components and managing complex application states with Redux. Collaborated with senior developers to implement clean code practices and participated in the full software development lifecycle to deliver high-quality frontend solutions.",
    skills: ["React.js", "Redux", "JavaScript"],
  },
  {
    company: "Discover WebTech",
    domain: "discoverwebtech.com",
    logoBg: "bg-[rgba(4,9,31)] py-1",
    logo: "https://discoverwebtech.com/wp-content/uploads/2026/04/discover-new-logo.svg",
    role: "Web Designer",
    period: "Sep 2022 - Dec 2022",
    description:
      "Design and development of responsive websites for clients, ensuring pixel-perfect UI and seamless user experience.",
    skills: ["Html", "Css", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">
        Work Experience
      </h2>

      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 ml-12 relative"
          >
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <div
                    className={`absolute top-0.5 -left-19 w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center p-1 shadow-sm ${exp.logoBg || "bg-white"}`}
                  >
                    <img
                      src={exp.logo}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-bold px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
