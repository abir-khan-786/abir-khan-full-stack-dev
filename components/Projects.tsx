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
    desc: "A healthcare-focused digital platform designed with modern UI, smart flows, and scalable full-stack structure. This project is a full-stack web application that allows users to search for doctors, book appointments, and manage their health records.",
    image: "/doctor.png",
    tech: ["Next.js", "PostgreSQL", "Node.js", "UI/UX", "TypeScript", "Framer Motion"],
    live: "https://doctor-hunt-full-stack.vercel.app/",
    github: "https://github.com/abir-khan-786/doctor_hunt_full_stack",
    tag: "Full-Stack",
  },
  {
    title: "Leatheria Shop",
    desc: "A full-stack ecommerce experience with product workflows, responsive design, and clean architecture for growth-ready businesses.",
    image: "/ecommers.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Express"],
    live: "https://leatheria-client-app-mcdo.vercel.app/",
    github: "https://github.com/abir-khan-786/-Leatheria-client-app",
    tag: "Scalable",
  },
  {
    title: "Cleaning Service",
    desc: "A cleaning service platform concept built with modern UI, smooth user flow, and scalable full-stack architecture.",
    image: "/cleaning.png",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript", "PostgreSQL"],
    live: "https://cleanico-fullstack-app.vercel.app/",
    github: "https://github.com/abir-khan-786/cleanico-fullstack-app",
    tag: "Full-Stack",
  },
  {
    title: "Luxelane Shop",
    desc: "A modern ecommerce application with polished UI, scalable workflows, and business-focused product structure.",
    image: "/ecommerscs.png",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript", "PostgreSQL"],
    live: "https://luxelane-shop-client.vercel.app/",
    github: "https://github.com/abir-khan-786/luxelane-shop-client",
    tag: "E-Commerce",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b1628] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Featured Projects
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Selected work with
            <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
              {" "}modern product thinking
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            A collection of full-stack and AI-enhanced projects focused on
            performance, usability, and polished user experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1728]/80 p-4 backdrop-blur-xl transition duration-300 hover:border-orange-500/30 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              {/* Project preview */}
              <div className="relative mb-5 overflow-hidden rounded-3xl border border-white/10 bg-[#111c30] sm:mb-6">
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_30%)]" />

                {/* Badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
                  <Sparkles size={14} />
                  {project.tag}
                </div>

                {/* Hover buttons desktop */}
                <div className="absolute inset-0 hidden items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100 md:flex">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>

                {/* bottom title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                    Project Preview
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <p className="mb-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  {project.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Mobile + bottom buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.03]"
                  >
                    Live Demo
                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    GitHub
                    <Github size={17} />
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 transition group-hover:ring-orange-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
