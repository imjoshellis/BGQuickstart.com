import React, { useMemo, useState } from 'react'
import './css/styles.css'
import './css/tailwind.css'
import Header from './layouts/Header'
import MainLayout from './layouts/MainLayout'
import PlayerCountContext from './PlayerCountContext'
import PlayerCountGrid from './PlayerCountGrid'
import StartPlayerSpinner from './StartPlayerSpinner'
import { motion, AnimatePresence } from 'framer-motion'

export default function App () {
  const [playerCount, setPlayerCount] = useState(0)

  const providerStartPlayerCount = useMemo(
    () => ({ playerCount, setPlayerCount }),
    [playerCount, setPlayerCount]
  )

  const motionProps = {
    initial: { opacity: 0, y: -10, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.9 },
    transition: { duration: 0.1, ease: 'easeOut' }
  }

  return (
    <MainLayout>
      <Header />
      <PlayerCountContext.Provider value={providerStartPlayerCount}>
        <AnimatePresence exitBeforeEnter>
          {playerCount === 0 ? (
            <motion.div {...motionProps} key='grid'>
              <PlayerCountGrid />
            </motion.div>
          ) : (
            <motion.div {...motionProps} key='spinner'>
              <StartPlayerSpinner />
            </motion.div>
          )}
        </AnimatePresence>
      </PlayerCountContext.Provider>
    </MainLayout>
  )
}
