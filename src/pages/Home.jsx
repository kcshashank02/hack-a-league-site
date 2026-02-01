import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import EventDetails from "../components/EventDetails"
import FAQ from "../components/FAQ"
import HAL4 from "../components/HAL4"  
import Timeline from "../components/Timeline"
import Feedback from "../components/Feedback"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-darkbg">
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <Timeline />
        <HAL4 />
        <FAQ />
        {/* <Feedback /> */}
        <Footer />
      </main>
    </div>
  )
}
