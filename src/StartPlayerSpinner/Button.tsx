import { motion } from 'framer-motion'
import React from 'react'

interface ButtonTypes {
  handleClick: () => void
  colorStyle: string
  label: string
  icon: JSX.Element
}

const Button: React.FC<ButtonTypes> = ({
  handleClick,
  colorStyle,
  label,
  icon
}) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => handleClick()}
    className={`flex
flex-row justify-around items-center p-3 px-4 rounded font-bold cursor-pointer shadow-lg ${colorStyle}`}
  >
    {icon}
    {label.toUpperCase()}
  </motion.div>
)

export default Button
