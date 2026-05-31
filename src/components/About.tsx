"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-900/20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative w-full h-137.5 md:h-162.5 max-w-lg aspect-3/4 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl group">
              <Image
                src="/Divyansh.jpeg"
                alt="Divyansh Jain"
                width={1024}
                height={1152}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mt-8 md:mt-0 flex flex-col justify-center h-full"
          >
            <div>
              <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-3">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                Bridging the gap between design and engineering.
              </h3>
            </div>

            <div className="space-y-5 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Hi, I'm Divyansh Jain. I specialize in building modern,
                scalable, and user-centric web applications. With a strong
                foundation in React and Next.js, I focus on writing clean,
                optimized code to deliver high-performance digital experiences.
              </p>
              <p>
                Beyond standard frontend development, I actively leverage
                AI-assisted tools to accelerate architectural refactoring and
                optimize complex logic. I am also deeply interested in
                full-stack ecosystems, exploring technologies like NestJS and
                PostgreSQL to craft efficient Micro-SaaS platforms from the
                ground up.
              </p>
            </div>

            {/* Expanded Grid to 4 items */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">
                    Currently at
                  </p>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                    Born West
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-green-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Location</p>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                    Sagar, MP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Education</p>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm line-clamp-1">
                    B.Com (Computer Apps)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">
                    Focus Area
                  </p>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                    AI & Micro-SaaS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
