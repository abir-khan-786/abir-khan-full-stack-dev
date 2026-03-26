"use client";

import { motion } from "framer-motion";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/70 backdrop-blur-2xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group relative inline-flex items-center gap-3"
                >
                    <motion.div
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-cyan-500/10 shadow-lg"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-orange-500/10 blur-md group-hover:bg-orange-500/20" />
                        <Sparkles className="relative z-10 h-5 w-5 text-orange-400" />
                    </motion.div>

                    <div>
                        <motion.h1
                            className="text-2xl font-black tracking-tight text-white"
                            animate={{ opacity: [1, 0.85, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >
                            Abir<span className="text-orange-500">AI</span>
                        </motion.h1>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                            Full-Stack Developer
                        </p>
                    </div>
                </motion.a>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + index * 0.08 }}
                            className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </nav>

                {/* CTA */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="hidden rounded-full border border-orange-500/20 bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 md:inline-flex"
                >
                    Let’s Build
                </motion.a>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="border-t border-white/10 bg-[#07111f]/95 px-6 py-5 backdrop-blur-2xl md:hidden"
                >
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-slate-300 transition hover:text-orange-400"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 inline-flex w-fit rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white"
                        >
                            Let’s Build
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;