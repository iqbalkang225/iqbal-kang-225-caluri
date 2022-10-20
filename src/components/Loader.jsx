import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {

  const loadVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {repeat: Infinity, repeatType: "reverse", duration: 0.5, },
        y: {repeat: Infinity, repeatType: "reverse", duration: 0.25, ease:  "easeOut"},
      }
    }
  }

  return (
    <motion.div
    variants = {loadVariants}
    animate = "animationOne"
    className = "h-4 w-4 rounded-full bg-red-500 mx-auto my-auto"
    >

    </motion.div>
  )
}

export default Loader