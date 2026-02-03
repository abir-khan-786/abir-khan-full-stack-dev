import Hero from "@/src/components/Home/Hero"
import RootLayout from "@/src/components/Layouts/RootLayout"
import React, { ReactElement } from "react"

const HomePage = () => {
  return (
    <RootLayout>
      <Hero/>
    </RootLayout>
  )
}

export default HomePage
