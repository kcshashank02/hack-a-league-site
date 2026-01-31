import { motion } from "framer-motion"
import TimelineItem from "./TimelineItem"

const HAL1 = [
  "/images/hal1/1.jpg",
  "/images/hal1/2.jpg",
  "/images/hal1/3.jpg",
  "/images/hal1/4.jpg",
]

const HAL2 = [
  "/images/hal2/5.jpg",
  "/images/hal2/6.jpg",
  "/images/hal2/7.jpg",
  "/images/hal2/8.jpg",
]

const HAL3 = [
  "/images/hal3/9.jpg",
  "/images/hal3/10.jpg",
  "/images/hal3/11.jpg",
  "/images/hal3/12.jpg",
]

const timelineData = [
  { id: "hal1", title: "HAL 1.0", year: "2023", images: HAL1 },
  { id: "hal2", title: "HAL 2.0", year: "2024", images: HAL2 },
  { id: "hal3", title: "HAL 3.0", year: "2025", images: HAL3 },
]

export default function Timeline() {
  return (
    <section id="legacy" className="relative max-w-6xl mx-auto px-4 py-20 overflow-x-hidden">
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Our Legacy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          From our first hackathon to HAL 3.0 — a journey of innovation and community.
        </motion.p>

        <div className="relative space-y-16">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-purple-500/40" />
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title}
              year={item.year}
              images={item.images}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
