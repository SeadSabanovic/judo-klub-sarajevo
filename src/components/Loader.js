import React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Loader() {
  const [customEventOccurred, setCustomEventOccurred] = useState(false)
  const removeLoader = () => {
    setTimeout(() => setCustomEventOccurred(true), 1000)
  }
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", removeLoader())
  }, [])

  return (
    <AnimatePresence>
      {!customEventOccurred && (
        <motion.div className="page-loader" key="loader" exit={{ opacity: 0 }}>
          <div className="loader"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
