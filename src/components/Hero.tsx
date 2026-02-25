"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
                    Frontend Developer
                </h2>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-linear-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-500">
                    Building Modern Web <br /> Experiences with Next.js
                </h1>
                <p className="max-w-150 text-zinc-500 md:text-xl dark:text-zinc-400 mb-8 mx-auto">
                    Designing and developing high-performance applications like Truvioai and LeadCRM.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="#projects">
                        <Button size="lg" className="rounded-full px-8">
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg" className="rounded-full px-8">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}