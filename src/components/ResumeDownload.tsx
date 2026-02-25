"use client"
import { motion } from "framer-motion"
import { FileText, Download, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumeDownload() {
    return (
        <section className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/10 via-transparent to-zinc-900/50 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
                {/* Decorative Background Element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                        <FileText className="text-white w-8 h-8" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                        Looking for the full story?
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-lg mx-auto text-lg">
                        Download my detailed resume to see my full technical background, academic achievements, and project deep-dives.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 py-7 text-lg font-bold bg-blue-600 hover:bg-blue-700 transition-all group w-full sm:w-auto"
                        >
                            <a href="/Divyansh_resume.pdf" download>
                                Download CV
                                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </Button>

                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Updated Feb 2026</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}