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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

export default function Timeline() {
  return (
    <section
      id="legacy"
      className="relative max-w-6xl mx-auto px-4 py-14 sm:py-20 overflow-x-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="relative"
      >
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-3 sm:mb-4"
        >
          Our Legacy
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-400 text-sm sm:text-base text-center mb-12 sm:mb-16 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0"
        >
          From our First Hackathon to HAL 3.0 — a journey of innovation and community.
        </motion.p>

        <motion.div
          variants={container}
          className="relative space-y-12 sm:space-y-16"
        >
          {/* Timeline line (static) */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-purple-500/40" />

          {timelineData.map((itemData, index) => (
            <TimelineItem
              key={itemData.id}
              title={itemData.title}
              year={itemData.year}
              images={itemData.images}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
