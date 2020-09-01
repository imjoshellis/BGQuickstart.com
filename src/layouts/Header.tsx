import React from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <motion.h1
        positionTransition
        className='text-4xl font-bold text-gray-200 '
      >
        BG QuickStart
      </motion.h1>
      <motion.h2 positionTransition className='mb-6 text-sm text-gray-500'>
        Built by{' '}
        <a
          className='text-gray-500 underline transition duration-500 ease-out hover:text-gray-300'
          href='https://github.com/imjoshellis'
          target='_blank'
          rel='noopener noreferrer'
        >
          @imjoshellis
        </a>
      </motion.h2>
    </>
  )
}

export default Header
