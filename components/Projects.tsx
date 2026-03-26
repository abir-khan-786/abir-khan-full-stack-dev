"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const projects = [
    {
        title: "AI Chatbot Web App",
        desc: "A modern AI chatbot application built with Next.js, Tailwind CSS, and Gemini API for smart, interactive conversations.",
        image: "/aiprojects.png",
        tech: ["Next.js", "TypeScript", "Gemini API", "Tailwind"],
        live: "https://ai-chatbot-app-eta.vercel.app/",
        github: "https://github.com/abir-khan-786/ai-chatbot-app",
        tag: "AI Powered",
    },
    {
        title: "Doctor Hunt",
        desc: "A healthcare-focused digital platform concept designed to guide users with modern UI, smart flows, and scalable structure.",
        image: "/doctor-hunst.png",
        tech: ["Next.js", "PostgreSQL", "Node.js", "UI/UX"],
        live: "https://doctor-hunt-client.vercel.app/",
        github: "https://github.com/abir-khan-786/doctor-hunt-client",
        tag: "Full-Stack",
    },
    {
        title: "Leatheria Shop",
        desc: "A full-stack ecommerce experience with product workflows, responsive design, and clean architecture for growth-ready businesses.",
        image: "/ecommers.png",
        tech: ["Nextjs", "Node.js", "PostgreSQL", "Express"],
        live: "https://leatheria-client-app-mcdo.vercel.app/",
        github: "https://github.com/abir-khan-786/-Leatheria-client-app",
        tag: "Scalable",
    },
    {
        title: "Cleaning Service",
        desc: "A Cleaning Service -focused digital platform concept designed to guide users with modern UI, smart flows, and scalable structure.",
        image: "/cleaning.png",
        tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript", "PostgreSQL"],
        live: "https://cleanico-fullstack-app.vercel.app/",
        github: "https://github.com/abir-khan-786/cleanico-fullstack-app",
        tag: "Full-Stack",
    },
    {
        title: "luxelane Shop",
        desc: "A full-stack ecommerce experience with product workflows, responsive design, and clean architecture for growth-ready businesses.",
        image: "/ecommerscs.png",
        tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript", "PostgreSQL"],
        live: "https://luxelane-shop-client.vercel.app/",
        github: "https://github.com/abir-khan-786/luxelane-shop-client",
        tag: "E-commerce",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#0b1628] px-6 py-24"
        >
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
                        Featured Projects
                    </p>

                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        Selected work with
                        <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            {" "}modern product thinking
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                        A collection of full-stack and AI-enhanced projects focused on
                        performance, usability, and polished user experience.
                    </p>
                </motion.div>

                <div className="grid gap-7 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1728]/80 p-6 backdrop-blur-xl transition duration-300 hover:border-orange-500/30"
                        >
                            {/* Glow overlay */}
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
                                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                            </div>

                            {/* Project preview */}
                            <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-[#111c30]">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        height={20}
                                        width={700}
                                        className="   object-fill  transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/20 to-transparent" />

                                {/* Extra gradient layer */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_30%)]" />

                                {/* Badge */}
                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
                                    <Sparkles size={14} />
                                    {project.tag}
                                </div>

                                {/* Hover overlay buttons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
                                    <a
                                        href={project.live}
                                        className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                                    >
                                        Live Demo
                                        <ArrowUpRight size={16} />
                                    </a>

                                    <a
                                        href={project.github}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                                    >
                                        GitHub
                                        <Github size={16} />
                                    </a>
                                </div>

                                {/* Bottom project title */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                                            Project Preview
                                        </p>
                                        <h3 className="mt-1 text-xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <p className="mb-5 leading-8 text-slate-400">{project.desc}</p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>


                            </div>

                            {/* Border shine */}
                            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 transition group-hover:ring-orange-500/20" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;