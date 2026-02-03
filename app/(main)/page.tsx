import About from "@/src/components/Home/About"
import Contact from "@/src/components/Home/Contact"
import { Hero } from "@/src/components/Home/Hero"
import Projects from "@/src/components/Home/Project"
import JobResume from "@/src/components/Home/Resume"
import Resume from "@/src/components/Home/Resume"
import TechStack from "@/src/components/Home/TechStack"
import RootLayout from "@/src/components/Layouts/RootLayout"
import React, { ReactElement } from "react"

const HomePage = () => {
  return (
    <RootLayout>
      <Hero />

      <Projects />
      <TechStack />
      <About />
      <Contact />
    </RootLayout>
  )
}

export default HomePage
