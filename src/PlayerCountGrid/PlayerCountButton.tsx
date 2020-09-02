import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import PlayerCountContext from '../PlayerCountContext'

interface PlayerCountButtonTypes {
  num: number
}

const PlayerCountButton: React.FC<PlayerCountButtonTypes> = ({ num }) => {
  const { setPlayerCount } = useContext(PlayerCountContext)!

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: '#CCD5E1'
      }}
      whileTap={{ scale: 0.95, backgroundColor: '#EDF2F7' }}
      className='px-8 py-8 text-xl font-bold text-gray-900 bg-gray-600 rounded-lg shadow-lg cursor-pointer'
      onClick={() => setPlayerCount(num)}
    >
      {num}
    </motion.div>
  )
}

export default PlayerCountButton
