"use client"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  ContactIcon,
} from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0f172a] relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 italic">
              LETS <br />{" "}
              <span className="text-orange-500 underline decoration-gray-800 underline-offset-8">
                CONNECT.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-sm">
              Have a project in mind? Reach out and lets create something
              extraordinary together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="bg-[#0b1222] p-4 rounded-2xl border border-gray-800 group-hover:border-orange-500 transition-colors">
                  <Mail className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    Email Me
                  </p>
                  <a
                    href="mailto:abirk2day@gmail.com"
                    className="text-white font-bold hover:text-orange-500 transition-colors"
                  >
                    abirk2day@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-[#0b1222] p-4 rounded-2xl border border-gray-800 group-hover:border-orange-500 transition-colors">
                  <ContactIcon className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    Phone
                  </p>
                  <p className="text-white font-bold hover:text-orange-500 transition-colors cursor-pointer" >01752103786</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="bg-[#0b1222] p-4 rounded-2xl border border-gray-800 group-hover:border-orange-500 transition-colors">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    Location
                  </p>
                  <p className="text-white font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "#f97316" }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b1222] border border-gray-800 text-white transition-colors"
                  href="#"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0b1222] p-10 rounded-[40px] border border-gray-800 relative group"
          >
            <div className="absolute -top-6 -right-6 bg-orange-600 text-white p-6 rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
              <Send size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Start a conversation <br /> today.
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I usually respond within 24 hours. Send a direct email or connect
              on LinkedIn for a faster chat.
            </p>

            <motion.a

              href="mailto:abirk2day@gmail.com"

              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-600/20"
            >
              Send Message <ArrowUpRight />
            </motion.a>

            <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm italic">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new projects
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
