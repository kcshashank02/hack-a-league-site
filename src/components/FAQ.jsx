import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "Who can participate?",
    a: " Only UG Students with a passion for technology can participate. Teams must consist of 3–4 members.",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, any hardware you might need, and your enthusiasm. We’ll provide food, internet, and workspace.",
  },
  {
    q: "Do I need to have a team beforehand?",
    a: "Yeah, individual participation is not allowed.",
  },
  {
    q: "What are the judging criteria?",
    a: "Projects will be judged on innovation, technical complexity, design, practicality, and presentation quality.",
  },
  {
    q: "Can I use pre-existing code?",
    a: "No, all code must be written during the hackathon. You can use open-source libraries and frameworks, but the core project must be built from scratch.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="w-full bg-darkbg-secondary py-14 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10"
        >
          FAQ
        </motion.h2>

        <div className="border border-purple-800 rounded-lg overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={item.q}
                variants={itemVariants}
                className={i === 0 ? "" : "border-t border-purple-800"}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className={`w-full text-left px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-6 transition-all duration-200 ease-out border-b border-purple-800 ${
                    isOpen
                      ? "bg-purple-800"
                      : "bg-[#0b0812] hover:bg-[#151024]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="text-white font-bold text-lg sm:text-xl inline-block"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden bg-[#0b0812]"
                    >
                      <div className="px-4 sm:px-5 py-3 sm:py-4">
                        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
