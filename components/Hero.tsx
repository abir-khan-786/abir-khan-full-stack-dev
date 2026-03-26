"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, ArrowRight, Bot } from "lucide-react";

const floatingBadges = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AI Integration",
    "Gemini API",
];

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#07111f] px-6 pt-28 text-white"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_30%)]" />
            <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />
            <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

                {/* LEFT CONTENT */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400"
                    >
                        <Sparkles size={16} />
                        AI-Powered Full-Stack Developer
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-5xl font-black leading-tight md:text-7xl"
                    >
                        I build
                        <span className="block bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            intelligent web products
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 max-w-2xl text-lg leading-8 text-slate-400"
                    >
                        I’m Abir Khan — a Full-Stack Developer focused on building fast,
                        scalable, and AI-enhanced web applications.
                    </motion.p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#ai-expertise"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white"
                        >
                            Explore AI Work
                            <Bot size={18} />
                        </a>
                    </div>

                    {/* badges */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {floatingBadges.map((badge) => (
                            <span
                                key={badge}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    {/* Glow */}
                    <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-orange-500/20 via-cyan-500/10 to-transparent blur-3xl" />

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d1728] shadow-2xl">
                        <img
                            src="/abirkhan.png"
                            alt="Abir Khan"
                            className="h-[550px] w-full object-cover object-top"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
                    >
                        <p className="text-sm text-slate-300">Currently building</p>
                        <h4 className="text-lg font-bold text-white">
                            AI-powered web apps
                        </h4>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;