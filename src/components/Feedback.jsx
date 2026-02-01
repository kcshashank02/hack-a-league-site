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

export default function Feedback() {
  return (
    <section id="feedback" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 sm:mb-4"
        >
          Send Feedback
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm sm:text-base text-center mb-8 sm:mb-12"
        >
          We&apos;d love to hear from you. Share your thoughts and suggestions.
        </motion.p>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-8 shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5 sm:space-y-6">
            <motion.div variants={item}>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
              >
                Name
              </label>
              <motion.input
                whileFocus={{ y: -1 }}
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400/50 transition"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={item}>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ y: -1 }}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400/50 transition"
                placeholder="you@example.com"
              />
            </motion.div>

            <motion.div variants={item}>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
              >
                Message
              </label>
              <motion.textarea
                whileFocus={{ y: -1 }}
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400/50 transition resize-none"
                placeholder="Your feedback..."
              />
            </motion.div>

            <motion.button
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 sm:py-4 rounded-xl bg-slate-300 hover:bg-slate-200 text-black font-semibold transition-all duration-300"
            >
              Send Feedback
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
