"use client"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, MessageSquare, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
    const contactLinks = {
        email: "jain.divyansh3113@gmail.com",
        github: "https://github.com/divyanshjain1314",
        linkedin: "https://www.linkedin.com/in/jain-divyansh-in",
        phone: "+91 8305216438"
    }

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-white">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-[600px] mx-auto text-lg">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Email Card */}
                        <a href={`mailto:${contactLinks.email}`} className="block group">
                            <div className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email</p>
                                    <p className="text-sm md:text-base font-medium truncate">{contactLinks.email}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">
                                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">LinkedIn</p>
                                    <p className="text-sm md:text-base font-medium truncate">jain-divyansh-in</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </a>

                        {/* GitHub Card */}
                        <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">
                                <div className="w-12 h-12 rounded-full bg-zinc-500/10 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-900 dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">GitHub</p>
                                    <p className="text-sm md:text-base font-medium truncate">divyanshjain1314</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </a>

                        {/* phone */}
                        <a href={`tel:${contactLinks.phone}`} className="block group">
                            <div className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">

                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Phone</p>
                                    <p className="text-sm md:text-base font-medium truncate">{contactLinks.phone}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </a>
                    </motion.div>

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50 dark:shadow-none">
                            <CardContent className="pt-8 pb-8 space-y-6">
                                <div className="flex items-center gap-3 text-blue-500 font-bold text-lg">
                                    <MessageSquare className="w-6 h-6" />
                                    <span>Let's collaborate</span>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    I am open to freelance opportunities, full-time positions, or interesting open-source projects.
                                    If you have a specific proposal or just want to chat about tech, feel free to reach out.
                                </p>
                                <div className="pt-4">
                                    <Button
                                        asChild
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl transition-all group"
                                    >
                                        <a href={`mailto:${contactLinks.email}`}>
                                            Send Me a Message
                                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}