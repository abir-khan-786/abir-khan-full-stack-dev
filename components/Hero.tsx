"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

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
      className="relative min-h-screen overflow-hidden bg-[#07111f] px-4 pt-24 text-white sm:px-6 md:px-8 md:pt-28"
    >
      {/* Background (LOW z-index) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.1),transparent_30%)]" />

      <div className="absolute left-10 top-20 z-0 h-72 w-72 rounded-full bg-orange-500/15 blur-[90px]" />
      <div className="absolute bottom-10 right-10 z-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />

      <div className="absolute inset-0 z-0 opacity-[0.04] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Content (TOP layer) */}
      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">

        {/* LEFT */}
        <div className="order-2 md:order-1">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300"
          >
            <Sparkles size={16} />
            AI-Powered Full-Stack Developer
          </motion.div>

          {/* 🔥 FIXED TEXT */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl lg:text-7xl"
          >
            I build
            <span className="block text-white sm:bg-gradient-to-r sm:from-orange-400 sm:via-white sm:to-cyan-400 sm:bg-clip-text sm:text-transparent">
              intelligent web products
            </span>
            <span className="block text-white">
              for modern businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
          >
            I’m Abir Khan — a Full-Stack Developer focused on building fast,
            scalable, and AI-enhanced web applications using Next.js,
            TypeScript, Node.js, MongoDB, and modern UI systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.03] sm:w-auto"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Explore AI Work
              <Bot size={18} />
            </a>
          </motion.div>

          {/* BADGES */}
          <motion.div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {floatingBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="order-1 relative md:order-2"
        >
          <div className="absolute -inset-4 z-0 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-cyan-500/10 to-transparent blur-2xl sm:-inset-6 sm:rounded-[3rem]" />

          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1728] shadow-2xl sm:rounded-[2.5rem]">
            <img
              src="/abirkhan.png"
              alt="Abir Khan"
              className="h-[360px] w-full object-cover object-top sm:h-[450px] md:h-[550px]"
            />

            {/* 🔥 FIXED overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/60 via-transparent to-transparent" />
          </div>

          {/* FLOAT CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 left-3 z-20 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:-bottom-6 sm:-left-4 sm:p-5"
          >
            <p className="text-sm text-slate-200">Currently building</p>
            <h4 className="text-base font-bold text-white sm:text-lg">
              AI-powered web apps
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
};

export default Hero;
