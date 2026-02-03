"use client"
import React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import RootLayout from "@/src/components/Layouts/RootLayout"

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Modern Portfolio with Next.js 15",
    excerpt:
      "Learn the secrets of creating a high-performance portfolio using the latest Next.js features and Framer Motion.",
    date: "Feb 01, 2026",
    readTime: "5 min read",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Scalable UI",
    excerpt:
      "A deep dive into utility-first CSS and how to maintain a clean codebase while building complex interfaces.",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Why TypeScript is Essential for Large Scale Apps",
    excerpt:
      "Exploring the benefits of static typing and how it saves hours of debugging in professional projects.",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop",
  },
]

const BlogPage = () => {
  return (
    <RootLayout>
      <div className="min-h-screen bg-[#0f172a] pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-6xl font-black text-white mb-4 italic">
              MY <span className="text-orange-500">INSIGHTS</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">
              Thoughts, tutorials, and stories about web development and design.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#0b1222] border border-gray-800 rounded-[32px] overflow-hidden group hover:border-orange-500/50 transition-all duration-500 shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
                  >
                    Read More
                    <ArrowRight
                      size={18}
                      className="text-orange-500 group-hover/btn:translate-x-2 transition-transform"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default BlogPage
