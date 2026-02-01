import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"


const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkbg overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-darkbg" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-purple-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

      {/* Logo wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="relative z-10"
      >
        <img
            src="/images/logo/logo.png"
            alt={siteConfig.brandName}
            className="h-75 sm:h-75"
          />
      </motion.div>
    </div>
  )
}

export default Loader
