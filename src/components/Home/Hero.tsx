import React from "react"
import Image from "next/image" // Next.js Image component ব্যবহার করা হয়েছে

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Blur - ইমেজের মতো আভা তৈরি করতে */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-white text-xl font-medium">Hello</span>
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight">
            Im{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Abir Khan
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-400">
            Software Developer
          </h2>

          <p className="text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
            আমি আধুনিক ওয়েব টেকনোলজি ব্যবহার করে স্কেলেবল এবং ইউজার-ফ্রেন্ডলি
            অ্যাপ্লিকেশন তৈরি করি।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20">
              Get a project?
            </button>
            <button className="border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
              My resume
            </button>
          </div>
        </div>

        {/* Right Image Section with Circular Ring */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Outer Decorative Ring */}
            <div className="absolute inset-0 border-[1px] border-orange-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-[1px] border-dashed border-gray-500/50 rounded-full"></div>

            {/* Image Container */}
            <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-8 border-[#0f172a] shadow-2xl z-10">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // এখানে তোমার ছবি দাও
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Floating Icons/Elements (ইমেজের মতো) */}
            <div className="absolute -top-4 left-10 text-orange-500 text-4xl font-light select-none opacity-50">
              &lt;
            </div>
            <div className="absolute bottom-10 -right-4 text-orange-500 text-4xl font-light select-none opacity-50">
              &gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
