import { siteConfig } from "../config/siteConfig"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/images/logo/logo.png" alt={siteConfig.brandName} className="h-9" />
          <span className="text-white font-bold tracking-wider text-lg">
            {siteConfig.brandName}
          </span>
        </a>

        <div className="flex items-center gap-8">
          <a href="#legacy" className="text-gray-300 hover:text-lavender transition-colors">
            History & Roadmap
          </a>
          <a href="#feedback" className="text-gray-300 hover:text-lavender transition-colors">
            Feedback
          </a>
          <a
            href={siteConfig.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-neon text-darkbg font-semibold shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  )
}
