"use client"
import { motion } from "framer-motion"
import { Heart, Copyright } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0b1222]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-black text-white tracking-tighter mb-2">
            ABIR<span className="text-orange-500">.</span>
          </div>
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            Designing the future
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
          Made with{" "}
          <Heart
            size={16}
            className="text-red-500 fill-red-500 animate-bounce"
          />{" "}
          by Developer Abir
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <Copyright size={14} /> 2026
          </div>
          <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
