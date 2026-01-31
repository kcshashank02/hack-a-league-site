import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      <img
        src="/images/hero/hero.png"
        alt={siteConfig.eventName}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-darkbg" />
      <div className="absolute inset-0 bg-gradient-to-r from-lavender/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-300 mb-4 tracking-[0.3em] text-sm font-medium"
        >
          REGISTRATION OPEN
        </motion.p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {siteConfig.eventName}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          {siteConfig.eventDates} | {siteConfig.eventLocation}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-400 mb-10"
        >
          24 Hours of Innovation • Code • Create
        </motion.p>
        <motion.a
          href={siteConfig.registerLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-10 py-4 rounded-xl bg-slate-300 hover:bg-slate-200 text-black font-bold text-lg transition-all duration-300"
        >
          Register Now →
        </motion.a>
      </motion.div>
    </section>
  )
}
