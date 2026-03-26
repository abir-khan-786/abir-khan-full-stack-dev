"use client";

import { motion } from "framer-motion";
import {
    Bot,
    BrainCircuit,
    LayoutDashboard,
    ServerCog,
    Sparkles,
    Workflow,
} from "lucide-react";

const services = [
    {
        title: "AI Chatbot Integration",
        desc: "I build smart chatbot experiences for websites and web apps that help users get instant answers, guidance, and support.",
        icon: <Bot className="h-7 w-7 text-orange-400" />,
        badge: "AI Powered",
    },
    {
        title: "AI-Enhanced Web Apps",
        desc: "I create modern web applications with intelligent features, combining clean frontend design, backend logic, and AI integration.",
        icon: <BrainCircuit className="h-7 w-7 text-cyan-400" />,
        badge: "Smart Systems",
    },
    {
        title: "Frontend Experiences",
        desc: "I design responsive, polished, and high-converting user interfaces that feel smooth, modern, and visually premium.",
        icon: <LayoutDashboard className="h-7 w-7 text-orange-400" />,
        badge: "Modern UI",
    },
    {
        title: "Backend & API Development",
        desc: "I build secure backend systems, REST APIs, authentication flows, and database-driven features for scalable products.",
        icon: <ServerCog className="h-7 w-7 text-cyan-400" />,
        badge: "Scalable",
    },
    {
        title: "Automation Workflows",
        desc: "I connect UI, backend, and AI tools into useful workflows that save time and make digital products more efficient.",
        icon: <Workflow className="h-7 w-7 text-orange-400" />,
        badge: "Efficient",
    },
    {
        title: "Custom Product Solutions",
        desc: "I help turn ideas into real digital products with strong architecture, modern design, and business-focused development.",
        icon: <Sparkles className="h-7 w-7 text-cyan-400" />,
        badge: "Business Ready",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0 },
};

const Services = () => {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#07111f] px-6 py-24"
        >
            {/* Background effects */}
            <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                        Services
                    </p>

                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        I build
                        <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            {" "}AI-powered digital experiences
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                        From intelligent chatbot interfaces to scalable full-stack products,
                        I build solutions that combine modern design, strong engineering,
                        and smart functionality.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1728]/85 p-7 backdrop-blur-xl transition hover:border-orange-500/30"
                        >
                            {/* Glow hover layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/10 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                            {/* top row */}
                            <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    {service.icon}
                                </div>

                                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
                                    {service.badge}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-orange-400">
                                    {service.title}
                                </h3>

                                <p className="leading-8 text-slate-400">{service.desc}</p>
                            </div>

                            <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom strip */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                    <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
                        <span className="rounded-full border border-white/10 px-4 py-2">
                            AI Chatbots
                        </span>
                        <span className="rounded-full border border-white/10 px-4 py-2">
                            Full-Stack Apps
                        </span>
                        <span className="rounded-full border border-white/10 px-4 py-2">
                            API Integration
                        </span>
                        <span className="rounded-full border border-white/10 px-4 py-2">
                            Smart UI Systems
                        </span>
                        <span className="rounded-full border border-white/10 px-4 py-2">
                            Business Solutions
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;