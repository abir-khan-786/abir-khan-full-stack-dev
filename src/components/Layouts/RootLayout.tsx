import React from "react"
import { Navbar } from "../shared/Navber"
import { Footer } from "../shared/Footer"

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    // min-h-screen এবং flex-col ঠিক আছে
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      {/* Navbar উপরে থাকবে */}
      <Navbar />

      {/* 1. flex-grow দেওয়া হয়েছে যাতে কন্টেন্ট কম থাকলেও ফুটার নিচে থাকে।
        2. pt-20 (Padding Top) দেওয়া হয়েছে যাতে fixed নাবারের নিচে কন্টেন্ট ঢাকা না পড়ে।
      */}
      <main className="flex-grow pt-24 px-4 sm:px-8 lg:px-12 text-white">
        {children}
      </main>

      {/* Footer নিচে থাকবে */}
      <Footer />
    </div>
  )
}

export default RootLayout
