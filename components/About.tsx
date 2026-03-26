"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Sparkles } from "lucide-react";

const features = [
    {
        title: "Full-Stack Engineering",
        desc: "Building scalable web applications from frontend to backend with clean architecture.",
        icon: <Cpu className="text-orange-400 h-6 w-6" />,
    },
    {
        title: "AI Integration",
        desc: "Integrating intelligent features like chatbots, smart assistants, and automation.",
        icon: <Brain className="text-cyan-400 h-6 w-6" />,
    },
    {
        title: "Database Systems",
        desc: "Designing efficient and scalable database structures using MongoDB and modern tools.",
        icon: <Database className="text-orange-400 h-6 w-6" />,
    },
    {
        title: "Modern UI Systems",
        desc: "Crafting responsive, smooth, and visually polished interfaces for better UX.",
        icon: <Sparkles className="text-cyan-400 h-6 w-6" />,
    },
];

const About = () => {
    return (
        <section id="about" className="relative px-6 py-28 bg-[#07111f] overflow-hidden">

            {/* Glow Background */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">
                        About Me
                    </p>

                    <h2 className="mb-6 text-4xl md:text-5xl font-black text-white leading-tight">
                        I build{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            intelligent digital systems
                        </span>{" "}
                        powered by code & AI
                    </h2>

                    <p className="mb-6 text-lg leading-8 text-slate-400">
                        I’m Abir Khan, a{" "}
                        <span className="text-white font-semibold">
                            Full-Stack Developer with AI integration skills
                        </span>{" "}
                        focused on building modern, scalable, and high-performance web
                        applications.
                    </p>

                    <p className="mb-8 text-lg leading-8 text-slate-400">
                        I don’t just build websites — I create smart systems that combine
                        clean UI, strong backend architecture, and AI-driven features to
                        deliver real value for users and businesses.
                    </p>

                    {/* TECH BADGES */}
                    {/* <div className="flex flex-wrap gap-3">
                        {[
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "MongoDB",
                            "AI Integration",
                            "Gemini API",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div> */}
                </motion.div>

                {/* RIGHT SIDE - CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group rounded-[2rem] border border-white/10 bg-[#0d1728]/80 p-6 backdrop-blur-xl transition hover:border-orange-500/30"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="mb-2 text-lg font-bold text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-6 text-slate-400">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;