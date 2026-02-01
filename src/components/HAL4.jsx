import { motion } from "framer-motion"


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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


const documents = [
  {
    title: "Rule Book",
    description: "Complete guidelines and rules for HAL 4.0",
    icon: "📋",
    link: "/documents", // Add your actual link
  },
  {
    title: "GitHub Manual",
    description: "Step-by-step guide for project submission",
    icon: "💻",
    link: "/documents", // Add your actual link
  },
  {
    title: "Consent Form",
    description: "Participant consent and agreement form",
    icon: "📝",
    link: "/documents/Consent.pdf", // Add your actual link
  },
]


export default function HAL4() {
  return (
    <section className="w-full bg-darkbg-secondary py-14 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center"
        >
          HAL 4.0
        </motion.h2>


        <motion.p
          variants={item}
          className="text-gray-300 text-sm sm:text-base text-center max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          Download essential documents to prepare for the hackathon. 
          Make sure to review the rule book and submit all required forms before the event.
        </motion.p>


        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {documents.map((doc) => (
            <motion.a
              key={doc.title}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="bg-darkbg border border-slate-800 rounded-2xl p-5 sm:p-6 text-center shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:border-purple-400 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.45),0_14px_28px_rgba(0,0,0,0.45)] group"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                {doc.icon}
              </div>


              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                {doc.title}
              </h3>


              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                {doc.description}
              </p>


              <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                Download
                <span className="text-lg">↓</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
