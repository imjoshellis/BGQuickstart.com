import { motion } from 'framer-motion'
import React from 'react'

const PlayerCountButton = ({ num, click }) => {
  const styles =
    'py-8 px-8 text-gray-900 bg-gray-600 rounded-lg text-xl font-bold cursor-pointer shadow-lg'
  // Cascading entrance render
  let delay = 0
  switch (num) {
    case 6:
      delay = 0
      break
    case 3:
    case 5:
    case 7:
    case 9:
      delay = 0.05
      break
    case 2:
    case 4:
    case 8:
    case 10:
      delay = 0.1
      break
    default:
      delay = 0
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: '#CCD5E1'
      }}
      whileTap={{ scale: 0.95, backgroundColor: '#EDF2F7' }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35, delay: delay }}
      className={styles}
      onClick={click}
    >
      {num}
    </motion.div>
  )
}

export default PlayerCountButton
