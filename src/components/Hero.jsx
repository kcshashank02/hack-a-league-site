import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20 sm:pt-16">
      {/* Background motion */}
      <motion.img
        src="/images/hero/hero.png"
        alt={siteConfig.eventName}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-darkbg" />
      <div className="absolute inset-0 bg-gradient-to-r from-lavender/10 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 max-w-4xl"
      >
        <motion.p
          variants={item}
          className="text-slate-300 mb-3 sm:mb-4 tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium"
        >
          REGISTRATION OPEN
        </motion.p>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          {siteConfig.eventName}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-2xl text-gray-300 mb-4 sm:mb-6"
        >
          {siteConfig.eventDates} | {siteConfig.eventLocation}
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-10"
        >
          24 Hours of Innovation • Code • Create
        </motion.p>

        <motion.a
          variants={item}
          href={siteConfig.registerLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-xl bg-slate-300 hover:bg-slate-200 text-black font-bold text-base sm:text-lg transition-all duration-300"
        >
          Register Now →
        </motion.a>
      </motion.div>
    </section>
  )
}
