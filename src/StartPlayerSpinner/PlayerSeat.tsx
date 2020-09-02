import { motion } from 'framer-motion'
import React from 'react'

interface PlayerSeatTypes {
  rotateString: string
  seatNumber: number
  startPlayer: number
}
const PlayerSeat: React.FC<PlayerSeatTypes> = ({
  rotateString,
  seatNumber,
  startPlayer
}) => {
  return (
    <div style={{ transform: rotateString }} className='m-auto dotBox'>
      <motion.div className='w-8 h-8 bg-gray-800 rounded-full dotItem dot' />
      {seatNumber === startPlayer && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.35 }}
          animate={{ opacity: 1 }}
          className='w-8 h-8 bg-gray-400 rounded-full dotItem dot'
        />
      )}
    </div>
  )
}

export default PlayerSeat
