"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Rocket } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="bg-orange-600 p-1.5 rounded-lg">
            <Rocket size={20} className="text-white" />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter uppercase">
            Abir<span className="text-orange-500">.</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About", "Projects", "Contact", "Resume", "Blog"].map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={
                    item === "Blog"
                      ? "/blog"
                      : item === "Resume"
                        ? "/resume"
                        : `/#${item.toLowerCase()}`
                  }
                  className="text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors uppercase tracking-widest"
                >
                  {item}
                </Link>
              </motion.div>
            ),
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider"
          >
            Lets Talk
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-[#0f172a] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white hover:text-orange-500 uppercase tracking-tighter"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
