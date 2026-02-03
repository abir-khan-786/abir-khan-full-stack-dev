"use client"
import { motion } from "framer-motion"
import { User, Award, Code, Coffee } from "lucide-react"

const About = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "02+",
      icon: <Award className="text-orange-500" />,
    },
    {
      label: "Projects Completed",
      value: "50+",
      icon: <Code className="text-orange-500" />,
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: <User className="text-orange-500" />,
    },
    {
      label: "Cups of Coffee",
      value: "500+",
      icon: <Coffee className="text-orange-500" />,
    },
  ]

  return (
    <section id="about" className="py-24 bg-[#0b1222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Creative Image Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gray-800 bg-[#0f172a] group">
              <img
                src="/abirkhan.png"
                alt="About Me"
                className="w-full h-[500px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-transparent to-transparent"></div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/5 select-none">
              01
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black text-white mb-6 italic tracking-tighter">
              WHO IS <span className="text-orange-500">ABIR?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am a passionate{" "}
              <span className="text-white font-bold">Full-Stack Developer</span>{" "}
              dedicated to building digital products that make an impact. My
              journey started with a curiosity for how things work on the web,
              which evolved into a career of crafting high-end applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              I dont just write code; I design experiences. Every pixel and
              every line of code is carefully thought out to ensure the best
              performance and user satisfaction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-[#0f172a] border border-gray-800 hover:border-orange-500/30 transition-all"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <h4 className="text-3xl font-black text-white">
                    {stat.value}
                  </h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
