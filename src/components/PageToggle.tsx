import React from 'react'
import { motion } from 'framer-motion'
import SpinPage from './SpinPage'
import PickPage from './PickPage'

interface PageToggleTypes {
  picked: boolean
  buttonRowOpacity: number
  playerCountClick: (n: number) => void
  startPlayer: number
  playerCount: number
  startFn: (n: number) => void
  lastRotation: number
  startRotation: number
  on: boolean
  setOn: (v: React.SetStateAction<boolean>) => void
}

export const PageToggle: React.FC<PageToggleTypes> = ({
  picked,
  buttonRowOpacity,
  playerCountClick,
  startPlayer,
  playerCount,
  startFn,
  lastRotation,
  startRotation,
  on,
  setOn
}) =>
  picked ? (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      animate={{ opacity: buttonRowOpacity, scale: buttonRowOpacity }}
      initial={{ opacity: buttonRowOpacity, scale: buttonRowOpacity }}
    >
      <SpinPage
        on={on}
        setOn={setOn}
        startPlayer={startPlayer}
        playerCount={playerCount}
        startFn={startFn}
        lastRotation={lastRotation}
        startRotation={startRotation}
      />
    </motion.div>
  ) : (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.85 }}
    >
      <PickPage playerCountClick={playerCountClick} />
    </motion.div>
  )

export default PageToggle
