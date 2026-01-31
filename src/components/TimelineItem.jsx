import { motion } from "framer-motion"
import Slideshow from "./Slideshow"

export default function TimelineItem({ title, year, images, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="grid grid-cols-[60px_1fr] gap-6"
    >
      <div className="flex flex-col items-center pt-1">
        <motion.div
          initial={{ scale: 1, boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" }}
          whileInView={{
            scale: 1.2,
            boxShadow: "0 0 20px 6px rgba(139, 92, 246, 0.5)",
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="w-4 h-4 rounded-full bg-purple-500 shrink-0 z-10"
        />
      </div>

      <div className="w-full max-w-full overflow-hidden rounded-xl bg-black/40 border border-purple-500/20 p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <span className="text-gray-400 text-sm">{year}</span>
        </div>

        {Array.isArray(images) && images.length > 0 && (
          <Slideshow images={images} title={title} />
        )}
      </div>
    </motion.div>
  )
}
