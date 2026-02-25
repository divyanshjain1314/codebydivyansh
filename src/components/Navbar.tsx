"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <nav className="fixed top-0 w-full z-50 h-20 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/10 dark:bg-black/10 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <div className="text-2xl font-black tracking-tighter">DIVYANSH<span className="text-blue-500">.</span></div>
                    <div className="w-10 h-10" />
                </div>
            </nav>
        )
    }

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 h-20 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-black/80 backdrop-blur-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo with Hover Effect */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-black tracking-tighter cursor-pointer"
                >
                    DIVYANSH<span className="text-blue-500 italic">.</span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
                            >
                                {link.name}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 border-l pl-8 border-zinc-200 dark:border-zinc-800">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {theme === 'dark' ? <Sun className="h-5 w-5 text-orange-500" /> : <Moon className="h-5 w-5 text-blue-600" />}
                    </Button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-zinc-600 dark:text-zinc-300"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold hover:text-blue-500 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar