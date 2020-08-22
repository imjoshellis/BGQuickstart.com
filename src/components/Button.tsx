import { motion } from 'framer-motion'
import React from 'react'

interface ButtonTypes {
  handleClick: () => void
  colorStyle: string
  children: JSX.Element
}

export const Button: React.FC<ButtonTypes> = ({
  handleClick,
  colorStyle,
  children
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => handleClick()}
    className={`flex
flex-row justify-around items-center p-3 px-4 rounded font-bold cursor-pointer shadow-lg ${colorStyle}`}
  >
    <>{children}</>
  </motion.div>
)

export default Button
