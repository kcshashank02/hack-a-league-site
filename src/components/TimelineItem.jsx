import { motion } from "framer-motion"
import Slideshow from "./Slideshow"

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

export default function TimelineItem({ title, year, images, index }) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05 }}
      className="grid grid-cols-[60px_1fr] gap-6"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center pt-1">
        <motion.div
          initial={{ scale: 0.9, boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" }}
          whileInView={{
            scale: 1.2,
            boxShadow: "0 0 24px 8px rgba(139, 92, 246, 0.45)",
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-4 h-4 rounded-full bg-purple-500 shrink-0 z-10"
        />
      </div>

      {/* Content card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-full overflow-hidden rounded-xl bg-black/40 border border-purple-500/20 p-6"
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <span className="text-gray-400 text-sm">{year}</span>
        </div>

        {Array.isArray(images) && images.length > 0 && (
          <Slideshow images={images} title={title} />
        )}
      </motion.div>
    </motion.div>
  )
}
