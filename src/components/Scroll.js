import React  from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Scroll() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const handleScrollToPercentage = e => {
    const bodyHeight = document.body.scrollHeight
    const clientY = e.clientY
    const screenHeight = window.innerHeight
    // Calculate the percentage difference
    const percentageDifference = (clientY / screenHeight) * 100
    const desiredHeight = (percentageDifference / 100) * bodyHeight
    window.scrollTo({
      top: desiredHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="scroll" onClick={e => handleScrollToPercentage(e)}>
      <motion.div className="scroll__bar" style={{ scaleY }}></motion.div>
    </div>
  )
}
