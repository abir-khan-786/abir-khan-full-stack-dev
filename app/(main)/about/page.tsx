import RootLayout from "@/src/components/Layouts/RootLayout"

const About = () => {
  return (
    <RootLayout>
      <section id="about" className="py-24 bg-[#0b1222]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-[#0f172a] border border-gray-800 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-orange-500">05+</h3>
              <p className="text-gray-400 text-sm mt-2 font-medium">
                Years Experience
              </p>
            </div>
            <div className="p-8 bg-[#0f172a] border border-gray-800 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-orange-500">120+</h3>
              <p className="text-gray-400 text-sm mt-2 font-medium">
                Projects Done
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-400 leading-loose mb-8">
              I started my software journey from photography. Through that, I
              learned to love the process of creating from scratch. Im dedicated
              to building things that are not only functional but beautiful to
              use.
            </p>
            <ul className="space-y-4 text-white font-medium">
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✔</span> Website Development
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✔</span> Mobile App Solutions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✔</span> UI/UX Optimization
              </li>
            </ul>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

export default About