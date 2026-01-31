import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Timeline from "../components/Timeline"
import Feedback from "../components/Feedback"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-darkbg">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Feedback />
        <Footer />
      </main>
    </div>
  )
}
