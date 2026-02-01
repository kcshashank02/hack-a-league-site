import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 sm:gap-3 group"
        >
          <img
            src="/images/logo/logo.png"
            alt={siteConfig.brandName}
            className="h-7 sm:h-9"
          />
          <span className="text-white font-bold tracking-wider text-base sm:text-lg">
            {siteConfig.brandName}
          </span>
        </motion.a>

        <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
          <motion.a
            href="#legacy"
            whileHover={{ y: -2 }}
            className="hidden sm:inline text-gray-300 hover:text-slate-400 transition-colors"
          >
            History & Roadmap
          </motion.a>

          <motion.a
            href="#feedback"
            whileHover={{ y: -2 }}
            className="hidden sm:inline text-gray-300 hover:text-slate-400 transition-colors"
          >
            Feedback
          </motion.a>

          <motion.a
            href={siteConfig.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-300 hover:bg-slate-200 text-black font-semibold transition-all duration-300 text-sm sm:text-base"
          >
            Register Now
          </motion.a>
        </div>
      </div>

      {/* Marquee (unchanged) */}
      <div
        className="marquee overflow-hidden bg-purple-600 h-8 sm:h-9 flex items-center"
        aria-live="polite"
      >
        <div
          className="marquee-track flex shrink-0"
          style={{ "--marquee-duration": "18s" }}
        >
          <div className="flex min-w-full items-center">
            <span className="inline-flex items-center text-slate-200 uppercase tracking-widest text-xs sm:text-sm px-4 sm:px-6 whitespace-nowrap">
              24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON •
            </span>
          </div>
          <div className="flex min-w-full items-center" aria-hidden="true">
            <span className="inline-flex items-center text-slate-200 uppercase tracking-widest text-xs sm:text-sm px-4 sm:px-6 whitespace-nowrap">
              24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON • 24 HOUR HACKATHON •
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
