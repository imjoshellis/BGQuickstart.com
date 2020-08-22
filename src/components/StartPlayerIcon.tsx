import { motion } from 'framer-motion'
import React from 'react'
import ArrowBack from './ArrowBack'

interface StartPlayerIconTypes {
  startFn: (n: number) => void
  playerCount: number
  lastRotation: number
  startRotation: number
  on: boolean
  setOn: (v: React.SetStateAction<boolean>) => void
}

export const StartPlayerIcon: React.FC<StartPlayerIconTypes> = ({
  startFn,
  on,
  setOn,
  playerCount,
  lastRotation,
  startRotation
}) => {
  const endRotation = on ? 360 * 3 + startRotation : startRotation
  return (
    <motion.div
      initial={{ width: 56, height: 56, rotate: lastRotation }}
      animate={{ width: 48, height: 48, rotate: endRotation }}
      transition={{ duration: 0.3 }}
      whileHover={{ backgroundColor: '#5F6163' }}
      onClick={() => {
        setOn(!on)
        startFn(playerCount)
      }}
      className='flex flex-col items-center justify-center text-gray-500 bg-gray-800 border-2 border-gray-700 border-solid rounded-full cursor-pointer start'
    >
      <div className='flex flex-col items-center justify-center w-2/3 startIcon'>
        <ArrowBack width='32' height='32' />
      </div>
    </motion.div>
  )
}

export default StartPlayerIcon
