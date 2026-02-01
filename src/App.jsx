import { useState, useEffect } from "react"
import Home from "./pages/Home"
import Loader from "./components/Loader"

function App() {
  // const [showIntro, setShowIntro] = useState(() => {
  //   return !localStorage.getItem("hasSeenIntro")
  // })

  // useEffect(() => {
  //   if (!showIntro) return

  //   const timer = setTimeout(() => {
  //     localStorage.setItem("hasSeenIntro", "true")
  //     setShowIntro(false)
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [showIntro])

  // if (showIntro) {
  //   return <Loader />
  // }
   // Always show loader on initial visit (no localStorage check)
  const [showIntro, setShowIntro] = useState(true)


  useEffect(() => {
    if (!showIntro) return

    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [showIntro])


  if (showIntro) {
    return <Loader />
  }


  return <Home />
}

export default App
