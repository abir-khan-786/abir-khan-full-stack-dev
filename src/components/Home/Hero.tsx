"use client"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-[0.2em] mb-6 uppercase">
            Available for freelance
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
            CREATIVE <br /> <span className="text-gray-500">DEVELOPER</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
            I build high-end digital experiences that blend{" "}
            <span className="text-white font-bold">modern engineering</span>{" "}
            with exceptional design.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-orange-600/20 hover:bg-orange-700 transition-all"
            >
              View Work <ArrowRight size={20} />
            </motion.button>
            <div className="flex gap-4 ml-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                  size={24}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Pulsing Glow */}
            <div className="absolute inset-0 bg-orange-600/20 rounded-full blur-[80px] animate-pulse"></div>
            {/* Spinning Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-orange-500/30 rounded-full"
            ></motion.div>
            {/* Image Box */}
            <div className="absolute inset-10 rounded-[40px] overflow-hidden border-4 border-[#0f172a] bg-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/abirkhan.png"
                alt="Abir"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
