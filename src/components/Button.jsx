import { motion } from 'framer-motion'
import React from 'react'

const Button = props => {
  const handleClick = () => props.click
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick()}
      className={`flex
flex-row justify-around items-center p-3 px-4 rounded font-bold cursor-pointer shadow-lg ${props.colorStyle}`}
    >
      {props.children}
    </motion.div>
  )
}

export default Button
