import { useState } from "react"

const faqs = [
  {
    q: "Who can participate?",
    a: "Anyone with a passion for technology can participate. Whether you’re a student, professional, or hobbyist, you’re welcome to join. Teams must consist of 2–4 members.",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, any hardware you might need, and your enthusiasm. We’ll provide food, drinks, internet, and workspace.",
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="w-full bg-darkbg-secondary py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">FAQ</h2>

        <div className="border border-purple-800">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                className={i === 0 ? "" : "border-t border-purple-800"}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between gap-6 transition-all duration-200 ease-out border-b border-purple-800 ${
                    isOpen
                      ? "bg-purple-800"
                      : "bg-[#0b0812] hover:bg-[#151024]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold">{item.q}</span>
                  <span className="text-white font-bold">{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className={`overflow-hidden bg-[#0b0812] px-5 py-4${isOpen ? '' : ' h-0 p-0'}${isOpen ? '' : ' hidden'}`}>
                    <p className="text-gray-200 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

