import { motion } from 'framer-motion'
import React from 'react'
import ArrowBack from './ArrowBack'

const StartPlayerIcon = ({ click, lastRotation, startRotation }) => {
  return (
    <motion.div
      initial={{ width: 56, height: 56, rotate: lastRotation }}
      animate={{ width: 48, height: 48, rotate: 360 * 3 + startRotation }}
      transition={{ duration: 0.3 }}
      whileHover={{ backgroundColor: '#5F6163' }}
      onClick={click}
      className='start rounded-full text-gray-500 flex flex-col items-center justify-center border-2 border-solid border-gray-700 bg-gray-800 cursor-pointer'
    >
      <div className='startIcon w-2/3 flex flex-col items-center justify-center'>
        <ArrowBack />
      </div>
    </motion.div>
  )
}

export default StartPlayerIcon
