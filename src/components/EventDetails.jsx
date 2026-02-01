import { motion } from "framer-motion"

const eventDetails = [
  { icon: "🛰️", label: "Event Status", value: "OFFLINE" },
  { icon: "🗓️", label: "Registration Deadline", value: "19th Feb, 2026" },
  { icon: "⏱️", label: "Duration", value: "24 Hours" },
  { icon: "👥", label: "Participation", value: "Team (3–4)" },
  { icon: "💰", label: "Registration Fee", value: "INR 350 / Participant" },
  { icon: "📍", label: "Location", value: "Global Academy of Technology, Bangalore" },
  { icon: "📅", label: "Event Date", value: "21st & 22nd Feb, 2026" },
  { icon: "🏆", label: "Prizes", value: "Worth ₹1 Lakh" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function EventDetails() {
  return (
    <section className="w-full bg-darkbg py-10 sm:py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {eventDetails.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-darkbg-secondary border border-slate-800 rounded-2xl p-4 sm:p-6 text-center shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:border-purple-400 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.45),0_14px_28px_rgba(0,0,0,0.45)]"
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-purple-400">
                {item.icon}
              </div>

              <div className="uppercase text-[10px] sm:text-xs tracking-widest text-gray-400">
                {item.label}
              </div>

              <div className="mt-1.5 sm:mt-2 text-base sm:text-lg font-semibold text-white">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
