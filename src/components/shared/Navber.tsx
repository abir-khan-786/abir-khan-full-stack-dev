"use client"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 py-6 px-10 bg-[#0f172a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-tight">
          Jensen<span className="text-[#f97316]"> Omega</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="md:hidden text-white">
          {/* Mobile Menu Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </nav>
  )
}
