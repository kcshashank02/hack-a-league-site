import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {/* Brand */}
          <motion.div variants={item} className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 sm:mb-4">
              <img
                src="/images/logo/logo.png"
                alt={siteConfig.brandName}
                className="h-7 sm:h-8"
              />
              <span className="text-white font-bold tracking-wider">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
              {siteConfig.brandName} — Building the future, one hack at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#" },
                { label: "History & Roadmap", href: "#legacy" },
                { label: "Feedback", href: "#feedback" },
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    whileHover={{ y: -2 }}
                    href={link.href}
                    className="text-gray-400 hover:text-slate-400 transition-colors inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
              <li>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={siteConfig.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-slate-400 transition-colors inline-block"
                >
                  Register
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{siteConfig.eventLocation}</li>
              <li>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="mailto:hackaleague@gmail.com"
                  className="hover:text-slate-400 transition-colors inline-block"
                >
                  hackaleague@gmail.com
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            {["Privacy Policy", "Terms of Service"].map((text) => (
              <motion.a
                key={text}
                whileHover={{ y: -2 }}
                href="#"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
