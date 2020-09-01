import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import PlayerCountContext from '../PlayerCountContext'

interface PlayerCountButtonTypes {
  num: number
}

const PlayerCountButton: React.FC<PlayerCountButtonTypes> = ({ num }) => {
  const { setPlayerCount } = useContext(PlayerCountContext)!

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
      className='px-8 py-8 text-xl font-bold text-gray-900 bg-gray-600 rounded-lg shadow-lg cursor-pointer'
      onClick={() => setPlayerCount(num)}
    >
      {num}
    </motion.div>
  )
}

export default PlayerCountButton
