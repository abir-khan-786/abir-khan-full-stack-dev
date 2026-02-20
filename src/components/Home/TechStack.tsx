"use client"
import { motion } from "framer-motion"
import {
  Code2,
  Terminal,
  Layers,
  Database,
  Globe,
  Cpu,
  Zap,
  Layout,
} from "lucide-react"

const TechStack = () => {
  const technologies = [
    { name: "Next.js", level: "Expert", icon: <Globe size={28} />, color: "#ffffff" },
    { name: "TypeScript", level: "Advanced", icon: <Code2 size={28} />, color: "#3178c6" },
    { name: "React", level: "Expert", icon: <Layout size={28} />, color: "#61dafb" },
    { name: "Tailwind", level: "Expert", icon: <Layers size={28} />, color: "#38bdf8" },
    { name: "Node.js", level: "Intermediate", icon: <Terminal size={28} />, color: "#68a063" },
    { name: "MongoDB", level: "Advanced", icon: <Database size={28} />, color: "#47a248" },
    { name: "PostgreSQL", level: "Learning", icon: <Cpu size={28} />, color: "#336791" },
    { name: "Framer Motion", level: "Advanced", icon: <Zap size={28} />, color: "#f97316" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-24 bg-[#0b1222] relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-4"
          >
            My Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-white italic"
          >
            Tech <span className="text-gray-500">Stack</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.06,
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: tech.color,
                boxShadow: `0 0 30px ${tech.color}55`,
              }}
              whileTap={{
                scale: 1.06,
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: tech.color,
                boxShadow: `0 0 30px ${tech.color}55`,
              }}
              transition={{ repeatType: "mirror", duration: 0.3 }}
              className="p-8 rounded-3xl bg-[#0f172a] border border-gray-800 flex flex-col items-center justify-center gap-4 group shadow-xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{ color: tech.color }}
                className="opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"
              >
                {tech.icon}
              </motion.div>

              <div className="text-center">
                <h3 className="text-white font-bold text-lg">{tech.name}</h3>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                  {tech.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack