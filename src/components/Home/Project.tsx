"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "SwiftShop E-commerce",
      desc: "A premium multi-vendor marketplace with stripe payment integration and real-time inventory.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      tags: ["Next.js", "Prisma", "Stripe"],
      category: "E-Commerce",
    },
    {
      title: "DocCure Portal",
      desc: "Healthcare management system for booking appointments and managing patient electronic records.",
      image:
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Firebase", "Tailwind"],
      category: "Medical Tech",
    },
    {
      title: "FoodDash Delivery",
      desc: "Real-time food ordering app with live map tracking and restaurant dashboard.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
      tags: ["React Native", "Node.js", "Socket.io"],
      category: "Food Tech",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-[#0f172a] px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl font-black text-white mb-4 italic">
            Featured{" "}
            <span className="text-orange-500 underline decoration-gray-800 underline-offset-8">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A collection of high-performance applications built with modern
            engineering and creative design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-[#0b1222] border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-transparent z-10 transition-all duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 z-20 transition-all duration-300">
                  <button className="p-3 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="p-3 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
