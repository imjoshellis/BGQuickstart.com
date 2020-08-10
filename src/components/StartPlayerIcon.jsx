import { motion } from 'framer-motion'
import React from 'react'
import ArrowBack from './ArrowBack'

export default ({ click, lastRotation, startRotation }) => {
  return (
    <motion.div
      initial={{ width: 56, height: 56, rotate: lastRotation }}
      animate={{ width: 48, height: 48, rotate: 360 * 3 + startRotation }}
      transition={{ duration: 0.3 }}
      whileHover={{ backgroundColor: '#5F6163' }}
      onClick={click}
      className='flex flex-col items-center justify-center text-gray-500 bg-gray-800 border-2 border-gray-700 border-solid rounded-full cursor-pointer start'
    >
      <div className='flex flex-col items-center justify-center w-2/3 startIcon'>
        <ArrowBack width={32} height={32} />
      </div>
    </motion.div>
  )
}
