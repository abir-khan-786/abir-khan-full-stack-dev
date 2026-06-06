"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Sparkles, CheckCircle2, Clock } from "lucide-react";

const projects = [
  {
    title: "Gadget Gor - E-commerce Platform",
    desc: "A modern gadget e-commerce platform built for Bangladesh market with sleek dark UI, real-time cart, wishlist, user dashboard, and admin panel. Features smooth animations, mobile-first design, and scalable architecture.",
    image: "/gadget.png",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion", "Context API", "App Router", "Route Groups", "Prisma"],
    live: "https://gadget-gor-frontend.vercel.app",
    github: "https://github.com/mahadi-khan/gadget-gor",
    tag: "Featured",
    features: ["3 Layouts (Main, Dashboard, Admin)", "Phone OTP Authentication", "Cart & Wishlist", "Dashboard with Charts", "Admin Analytics", "Product Filtering"],
    status: "In Development",
    highlight: true,
  },
  {
    title: "AI Chatbot Web App",
    desc: "Modern AI chatbot built with Next.js, Tailwind CSS, and Gemini API for smart, interactive conversations with real-time responses.",
    image: "/aiprojects.png",
    tech: ["Next.js", "TypeScript", "Gemini API", "Tailwind", "Framer Motion"],
    live: "https://ai-chatbot-app-eta.vercel.app/",
    github: "https://github.com/abir-khan-786/ai-chatbot-app",
    tag: "AI Powered",
    features: ["Gemini API Integration", "Real-time Chat UI", "Message History", "Dark/Light Mode", "Responsive Design", "Typing Indicators"],
    status: "Live",
    highlight: false,
  },
  {
    title: "Doctor Hunt",
    desc: "Healthcare platform to search doctors, book appointments, and manage health records with modern UI and scalable full-stack structure.",
    image: "/doctor.png",
    tech: ["Next.js", "PostgreSQL", "Node.js", "TypeScript", "Framer Motion", "Prisma"],
    live: "https://doctor-hunt-full-stack.vercel.app/",
    github: "https://github.com/abir-khan-786/doctor_hunt_full_stack",
    tag: "Full-Stack",
    features: ["Doctor Search & Filter", "Appointment Booking", "Patient Dashboard", "Health Records", "Authentication", "Admin Panel"],
    status: "Live",
    highlight: false,
  },
  {
    title: "Leatheria Shop",
    desc: "Full-stack ecommerce with product workflows, responsive design, and clean architecture for growth-ready businesses.",
    image: "/ecommers.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Express", "Tailwind"],
    live: "https://leatheria-client-app-mcdo.vercel.app/",
    github: "https://github.com/abir-khan-786/-Leatheria-client-app",
    tag: "Scalable",
    features: ["Product Catalog", "Shopping Cart", "Checkout Flow", "Order Management", "User Authentication", "Responsive UI"],
    status: "Live",
    highlight: false,
  },
  {
    title: "Cleaning Service",
    desc: "Cleaning service platform with modern UI, smooth user flow, and scalable full-stack architecture for service booking.",
    image: "/cleaning.png",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript", "PostgreSQL", "Prisma"],
    live: "https://cleanico-fullstack-app.vercel.app/",
    github: "https://github.com/abir-khan-786/cleanico-fullstack-app",
    tag: "Full-Stack",
    features: ["Service Booking", "Pricing Calculator", "Schedule Management", "User Dashboard", "Payment Integration", "Admin Controls"],
    status: "Live",
    highlight: false,
  },
  {
    title: "Luxelane Shop",
    desc: "Modern ecommerce application with polished UI, scalable workflows, and business-focused product structure.",
    image: "/ecommerscs.png",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript", "PostgreSQL"],
    live: "https://luxelane-shop-client.vercel.app/",
    github: "https://github.com/abir-khan-786/luxelane-shop-client",
    tag: "E-Commerce",
    features: ["Modern Product Grid", "Wishlist Feature", "Cart Management", "User Profiles", "Search & Filter", "Mobile Optimized"],
    status: "Live",
    highlight: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0b1628] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12 text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Featured Projects</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Selected work with <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent"> modern product thinking</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded- border bg-[#0d1728]/80 p-4 backdrop-blur-xl transition duration-300 sm:p-6 ${project.highlight ? "border-orange-500/40 shadow-[0_0_60px_-20px_rgba(249,115,22,0.5)] md:col-span-2" : "border-white/10 hover:border-orange-500/30"
                }`}
            >
              {/* Project preview */}
              <div className="relative mb-5 overflow-hidden rounded-3xl border border-white/10 bg-[#111c30]">
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/20 to-transparent" />

                {/* Badges - এখন status ও দেখাবে */}
                <div className="absolute left-4 top-4 flex gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur">
                    <Sparkles size={14} />
                    {project.tag}
                  </div>
                  <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text- font-medium backdrop-blur border ${project.status === "In Development" ? "bg-amber-500/15 text-amber-200 border-amber-500/25" : "bg-emerald-500/15 text-emerald-200 border-emerald-500/25"
                    }`}>
                    <Clock size={11} />
                    {project.status}
                  </div>
                </div>



                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white sm:text-xl">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <p className="mb-4 text-sm leading-7 text-slate-300">{project.desc}</p>

                {/* FEATURES - এখন সব card এ দেখাবে */}
                {project.features && (
                  <div className="mb-5 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="mb-2.5 text- font-semibold uppercase tracking-wider text-slate-400">Key Features</p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
                          <span className="text- text-slate-200">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text- font-medium text-slate-300">{item}</span>
                  ))}
                </div>

                <div className="flex  justify-between items-center gap-3">
                  <a href={project.live} target="_blank" className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">Live Demo <ArrowUpRight size={16} /></a>
                  <a href={project.github} target="_blank" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">GitHub <Github size={16} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;