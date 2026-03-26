"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Sparkles, Workflow } from "lucide-react";

const items = [
    {
        title: "AI Chatbot Integration",
        desc: "Custom chatbot interfaces for websites using modern API-based AI systems.",
        icon: <Bot className="h-7 w-7 text-orange-400" />,
    },
    {
        title: "Smart UI Experiences",
        desc: "AI-style interactive interfaces with smooth user flows and polished frontend design.",
        icon: <Sparkles className="h-7 w-7 text-cyan-400" />,
    },
    {
        title: "Prompt-Based Systems",
        desc: "Structured prompt logic for assistant tools, portfolio bots, and business support apps.",
        icon: <BrainCircuit className="h-7 w-7 text-orange-400" />,
    },
    {
        title: "Workflow Automation",
        desc: "Connecting frontend, backend, and AI responses into practical product workflows.",
        icon: <Workflow className="h-7 w-7 text-cyan-400" />,
    },
];

const AIExpertise = () => {
    return (
        <section id="ai-expertise" className="relative px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                        AI Expertise
                    </p>
                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        Bringing AI into real web products
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                        I combine full-stack development with AI integration to build modern
                        web experiences that feel smart, useful, and interactive.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group rounded-[2rem] border border-white/10 bg-[#0d1728]/80 p-8 backdrop-blur-xl transition hover:border-orange-500/30"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition group-hover:scale-110">
                                {item.icon}
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-white">
                                {item.title}
                            </h3>

                            <p className="leading-8 text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIExpertise;