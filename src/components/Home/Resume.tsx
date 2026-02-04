"use client"
import { motion } from "framer-motion"
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Calendar,
} from "lucide-react"

const JobResume = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Genres-Agency",
      duration: "2023 - 2025",
      desc: "Leading the frontend team to build scalable dashboard solutions and optimizing performance by 40%.",
    },
  ]

  const education = [
    {
      degree: "BSS Honours in Social Welfare",
      institution: "National  University",
      duration: "2017 - 2021",
      desc: "Focused on Software Engineering, Data Structures, and Algorithms.",
    },
  ]

  return (
    <section id="resume" className="py-24 bg-[#0b1222] px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white italic mb-4">
            My <span className="text-orange-500">Resume</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto uppercase tracking-widest text-xs font-bold">
            Experience & Education History
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-600/10 rounded-xl">
                <Briefcase className="text-orange-500" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="relative pl-8 border-l-2 border-gray-800 hover:border-orange-500 transition-colors pb-8"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0f172a] border-2 border-orange-500 rounded-full"></div>
                <div className="flex items-center gap-2 text-orange-500 text-sm font-bold mb-2">
                  <Calendar size={14} /> {exp.duration}
                </div>
                <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                <p className="text-gray-500 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education & Certificates */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-600/10 rounded-xl">
                <GraduationCap className="text-orange-500" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="relative pl-8 border-l-2 border-gray-800 hover:border-orange-500 transition-colors pb-8"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0f172a] border-2 border-orange-500 rounded-full"></div>
                <div className="flex items-center gap-2 text-orange-500 text-sm font-bold mb-2">
                  <Calendar size={14} /> {edu.duration}
                </div>
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="text-gray-500 font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-sm">{edu.desc}</p>
              </motion.div>
            ))}

            {/* Download Button Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-gray-800 text-center"
            >
              <Award className="text-orange-500 mx-auto mb-4" size={40} />
              <h4 className="text-white font-bold mb-2">Download My Full CV</h4>
              <p className="text-gray-500 text-xs mb-6">
                Available in PDF format (2.4 MB)
              </p>
              <a
                href="https://drive.google.com/file/d/1NPn6LYvU9VcCob4WziuwJrhDaXuUy8Ts/view?usp=drive_link"
                download
                target="_blank"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-600/20"
              >
                <Download size={18} /> Download Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobResume
