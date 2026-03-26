"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Github,
    Linkedin,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

const contactItems = [
    {
        title: "Email Me",
        value: "abirk2day@email.com",
        href: "mailto:abirk2day@email.com",
        icon: <Mail className="h-6 w-6 text-orange-400" />,
        border: "hover:border-orange-500/30",
    },
    {
        title: "WhatsApp",
        value: "+8801752103786",
        href: "https://wa.me/8801752103786",
        icon: <Phone className="h-6 w-6 text-cyan-400" />,
        border: "hover:border-cyan-500/30",
    },
    {
        title: "Location",
        value: "Dhaka,Bangladesh",
        href: "#",
        icon: <MapPin className="h-6 w-6 text-orange-400" />,
        border: "hover:border-orange-500/30",
    },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/abir-khan-786",
        icon: <Github className="h-5 w-5" />,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/abirkhan0322",
        icon: <Linkedin className="h-5 w-5" />,
    },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#07111f] px-6 py-24"
        >
            {/* background glow */}
            <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
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
                        Contact
                    </p>

                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        Let’s build something
                        <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                            {" "}powerful together
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                        I’m available for full-stack web development, AI-powered product
                        integration, and modern business websites. Let’s talk about your
                        idea and turn it into a real product.
                    </p>
                </motion.div>

                <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* left big card */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0d1728]/85 p-8 backdrop-blur-xl md:p-10"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
                                Available for freelance work
                            </div>

                            <h3 className="max-w-2xl text-3xl font-black leading-tight text-white md:text-4xl">
                                Need a premium website, full-stack app, or AI-integrated product?
                            </h3>

                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                                I help businesses and individuals build modern digital products
                                with strong frontend design, scalable backend systems, and smart
                                user experiences.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="mailto:abirk2day@email.com"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.03]"
                                >
                                    Send Email
                                    <ArrowUpRight size={18} />
                                </a>

                                <a
                                    href="https://wa.me/8801752103786"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                                >
                                    WhatsApp Me
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                    Full-Stack Development
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                    AI Integration
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                    Responsive UI
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                    API & Backend
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* right side cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-5"
                    >
                        {contactItems.map((item, index) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className={`rounded-[1.75rem] border border-white/10 bg-[#0d1728]/85 p-6 backdrop-blur-xl transition ${item.border}`}
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                                    {item.icon}
                                </div>

                                <p className="text-sm text-slate-400">{item.title}</p>
                                <h4 className="mt-1 text-lg font-bold text-white">
                                    {item.value}
                                </h4>
                            </motion.a>
                        ))}

                        <div className="rounded-[1.75rem] border border-white/10 bg-[#0d1728]/85 p-6 backdrop-blur-xl">
                            <p className="mb-4 text-sm text-slate-400">Follow Me</p>

                            <div className="flex gap-3">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-orange-500/30 hover:text-white"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;