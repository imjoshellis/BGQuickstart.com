import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import ArrowBack from './components/ArrowBack'
import Button from './components/Button'
import PageToggle from './components/PageToggle'
import './css/styles.css'
import './css/tailwind.css'
import Shuffle from './icons/Shuffle'
import MainLayout from './layouts/MainLayout'
import Header from './layouts/Header'

export default function App () {
  const [startPlayer, setStartPlayer] = useState(0)
  const [playerCount, setPlayerCount] = useState(0)
  const [picked, setPicked] = useState(false)
  const [startRotation, setStartRotation] = useState(0)
  const [lastRotation, setLastRotation] = useState(0)
  const [buttonRowOpacity, setButtonRowOpacity] = useState(0)
  const [on, setOn] = useState(true)

  const randomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1
  }

  const playerCountClick = (n: number) => {
    setPlayerCount(n)
    startFn(n)
    setPicked(true)
    setButtonRowOpacity(1)
  }

  const startFn = (n: number) => {
    const newStart = randomInt(n)
    setStartPlayer(newStart)
    setLastRotation(startRotation)
    setStartRotation((360 / n) * newStart + 225)
  }

  const reset = () => {
    setPlayerCount(0)
    setStartPlayer(0)
    setLastRotation(0)
    setPicked(false)
    setOn(true)
    setButtonRowOpacity(0)
  }

  return (
    <MainLayout>
      <Header />
      <AnimatePresence>
        <PageToggle
          on={on}
          setOn={setOn}
          picked={picked}
          buttonRowOpacity={buttonRowOpacity}
          playerCountClick={playerCountClick}
          startPlayer={startPlayer}
          startFn={startFn}
          playerCount={playerCount}
          lastRotation={lastRotation}
          startRotation={startRotation}
        />
      </AnimatePresence>
      <motion.div
        positionTransition
        initial={{ opacity: buttonRowOpacity }}
        animate={{ opacity: buttonRowOpacity }}
        className='grid grid-cols-2 gap-4 mt-12'
      >
        <Button
          handleClick={reset}
          colorStyle='text-red-900 bg-red-300 hover:bg-red-200'
        >
          <>
            <ArrowBack height='24' width='24' />
            RESET
          </>
        </Button>
        <Button
          handleClick={() => {
            setOn(!on)
            startFn(playerCount)
          }}
          colorStyle='text-green-900 bg-green-400 hover:bg-green-300'
        >
          <>
            <Shuffle height='24' width='24' />
            REROLL
          </>
        </Button>
      </motion.div>
    </MainLayout>
  )
}
