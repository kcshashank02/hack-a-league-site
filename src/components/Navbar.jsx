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
          <a href="#legacy" className="text-gray-300 hover:text-slate-400 transition-colors">
            History & Roadmap
          </a>
          <a href="#feedback" className="text-gray-300 hover:text-slate-400 transition-colors">
            Feedback
          </a>
          <a
            href={siteConfig.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-300 hover:bg-slate-200 text-black font-semibold transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>

      <div
        className="marquee overflow-hidden bg-purple-600 h-9 flex items-center"
        aria-live="polite"
      >
        <div className="marquee-track flex shrink-0" style={{ "--marquee-duration": "18s" }}>
          <div className="flex min-w-full items-center">
            <span className="inline-flex items-center text-slate-200 uppercase tracking-widest text-sm px-6 whitespace-nowrap">
              24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON •
            </span>
          </div>
          <div className="flex min-w-full items-center" aria-hidden="true">
            <span className="inline-flex items-center text-slate-200 uppercase tracking-widest text-sm px-6 whitespace-nowrap">
              24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON •
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
