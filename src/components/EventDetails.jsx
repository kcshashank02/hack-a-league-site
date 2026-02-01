const eventDetails = [
  { icon: "🛰️", label: "Event Status", value: "OFFLINE" },
  { icon: "🗓️", label: "Registration Deadline", value: "TBA" },
  { icon: "⏱️", label: "Duration", value: "24 Hours" },
  { icon: "👥", label: "Participation", value: "Team (2–4)" },
  { icon: "💰", label: "Registration Fee", value: "INR 350 / Participant" },
  { icon: "📍", label: "Location", value: "Global Academy of Technology, Bangalore" },
  { icon: "📅", label: "Event Date", value: "21st & 22nd Feb, 2026" },
  { icon: "🏆", label: "Prizes", value: "Worth ₹1 Lakh" },
]

export default function EventDetails() {
  return (
    <section className="w-full bg-darkbg py-12">
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {eventDetails.map((item) => (
            <div
              key={item.label}
              className="bg-darkbg-secondary border border-slate-800 rounded-2xl p-6 text-center shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:scale-[1.03] hover:border-purple-400 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.45),0_14px_28px_rgba(0,0,0,0.45)]"
            >
              <div className="text-3xl mb-3 text-purple-400">{item.icon}</div>
              <div className="uppercase text-xs tracking-widest text-gray-400">
                {item.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

