export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 py-12 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white font-bold text-lg">
          Jensen<span className="text-[#f97316]">.</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with Next.js.
        </p>
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-[#f97316]">
            Github
          </a>
          <a href="#" className="hover:text-[#f97316]">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#f97316]">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
