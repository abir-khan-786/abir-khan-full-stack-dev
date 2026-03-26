"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Server,
    PanelsTopLeft,
    BrainCircuit,
    GitBranch,
    ShieldCheck,
    Workflow,
} from "lucide-react";

const skills = [
    {
        title: "Frontend Development",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        icon: <PanelsTopLeft className="h-7 w-7 text-orange-400" />,
        glow: "from-orange-500/20 to-transparent",
    },
    {
        title: "Backend Development",
        items: ["Node.js", "Express.js", "REST API", "Authentication"],
        icon: <Server className="h-7 w-7 text-cyan-400" />,
        glow: "from-cyan-500/20 to-transparent",
    },
    {
        title: "Database & ORM",
        items: ["MongoDB", "Mongoose", "Prisma", "Data Modeling"],
        icon: <Database className="h-7 w-7 text-orange-400" />,
        glow: "from-orange-500/20 to-transparent",
    },
    {
        title: "AI Integration",
        items: ["Gemini API", "OpenAI API", "Prompt Design", "Chatbot UI"],
        icon: <BrainCircuit className="h-7 w-7 text-cyan-400" />,
        glow: "from-cyan-500/20 to-transparent",
    },
    {
        title: "Tools & Workflow",
        items: ["Git", "GitHub", "VS Code", "Deployment"],
        icon: <Workflow className="h-7 w-7 text-orange-400" />,
        glow: "from-orange-500/20 to-transparent",
    },
    {
        title: "Clean Code Practice",
        items: ["Reusable Components", "Responsive Design", "Performance", "Security"],
        icon: <ShieldCheck className="h-7 w-7 text-cyan-400" />,
        glow: "from-cyan-500/20 to-transparent",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#0b1628] px-6 py-24"
        >
            {/* Background glow */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                        Skills & Stack
                    </p>

                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        Technologies I use to build
                        <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            {" "}modern full-stack products
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                        My core toolkit for crafting responsive interfaces, scalable backend
                        systems, database-driven applications, and AI-enhanced web
                        experiences.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.title}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1728]/90 p-7 backdrop-blur-xl"
                        >
                            {/* Glow layer */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${skill.glow} opacity-0 transition duration-500 group-hover:opacity-100`}
                            />

                            {/* top icon */}
                            <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                                {skill.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="mb-3 text-2xl font-bold text-white transition group-hover:text-orange-400">
                                    {skill.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, index) => (
                                        <motion.span
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-orange-500/20 hover:bg-white/10"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative blur */}
                            <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom skill strip */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                            <Code2 className="h-4 w-4 text-orange-400" />
                            Clean Frontend
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                            <Server className="h-4 w-4 text-cyan-400" />
                            Scalable Backend
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                            <Database className="h-4 w-4 text-orange-400" />
                            Structured Data
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                            <BrainCircuit className="h-4 w-4 text-cyan-400" />
                            AI-Ready Products
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                            <GitBranch className="h-4 w-4 text-orange-400" />
                            Production Workflow
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;