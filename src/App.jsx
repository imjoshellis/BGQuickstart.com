import { AnimatePresence, motion } from 'framer-motion'
import range from 'lodash-es/range'
import React, { useState } from 'react'
import { Button, PlayerCountButton, StartPlayerIcon } from './components'
import ArrowBack from './components/ArrowBack'
import './css/styles.css'
import './css/tailwind.css'
import Shuffle2 from './shuffle-2'

export default function App () {
  const [startPlayer, setStartPlayer] = useState(0)
  const [playerCount, setPlayerCount] = useState(0)
  const [picked, setPicked] = useState(false)
  const [startRotation, setStartRotation] = useState(0)
  const [lastRotation, setLastRotation] = useState(0)
  const [buttonRowOpacity, setButtonRowOpacity] = useState(0)

  const randomInt = max => {
    return Math.floor(Math.random() * Math.floor(max)) + 1
  }

  const playerCountClick = n => {
    setPlayerCount(n)
    startFn(n)
    setPicked(true)
    setButtonRowOpacity(1)
  }

  const startFn = n => {
    const newStart = randomInt(n)
    setStartPlayer(newStart)
    setLastRotation(startRotation)
    setStartRotation((360 / n) * newStart + 225)
  }

  const PlayerCount = () => {
    const playerCounts = [2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <div className='grid grid-cols-3 gap-4'>
        {playerCounts.map(n => (
          <PlayerCountButton
            key={n}
            num={n}
            click={() => playerCountClick(n)}
          />
        ))}
      </div>
    )
  }

  const PlayerSeat = ({ rotateString, pIdx }) => {
    return (
      <div style={{ transform: rotateString }} className='dotBox m-auto'>
        <motion.div className='dotItem dot w-8 h-8 rounded-full bg-gray-800' />
        {pIdx === startPlayer % playerCount && (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.35 }}
            animate={{ opacity: 1 }}
            className='dotItem dot w-8 h-8 rounded-full bg-gray-500'
          />
        )}
      </div>
    )
  }

  const PlayerSeats = () => {
    const playerSeats = range(playerCount)
    return playerSeats.map(pIdx => {
      const rotation = (360 / playerCount) * pIdx + 225 + 'deg'
      const rotateItem = 'rotate(' + rotation + ')'
      return (
        <PlayerSeat
          key={'player-seat-' + pIdx}
          pIdx={pIdx}
          rotateString={rotateItem}
        />
      )
    })
  }

  const Spinner = () => {
    return (
      <div className='dotWrap'>
        <PlayerSeats startPlayer={startPlayer} />
        <div className='startBox m-auto'>
          <StartPlayerIcon
            click={() => startFn(playerCount)}
            lastRotation={lastRotation}
            startRotation={startRotation}
          />
        </div>
      </div>
    )
  }

  const PickPage = () => (
    <div className='flex-1'>
      <PlayerCount />
    </div>
  )

  const reset = () => {
    setPlayerCount(0)
    setStartPlayer(0)
    setLastRotation(0)
    setPicked(false)
    setButtonRowOpacity(0)
  }

  const SpinPage = () => (
    <>
      <Spinner />
      <p className='text-gray-700 font-bold text-sm'>(YOU)</p>
    </>
  )

  const PageToggle = () =>
    picked ? (
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        animate={{ opacity: buttonRowOpacity, scale: buttonRowOpacity }}
        initial={{ opacity: buttonRowOpacity, scale: buttonRowOpacity }}
      >
        <SpinPage />
      </motion.div>
    ) : (
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.85 }}
      >
        <PickPage />
      </motion.div>
    )

  return (
    <div className='App text-gray-300 bg-gray-900 flex flex-col items-center justify-center py-8 px-4'>
      <motion.h1
        positionTransition
        className='text-gray-200 font-bold text-4xl '
      >
        BG QuickStart
      </motion.h1>
      <motion.h2 positionTransition className='text-gray-500 text-sm mb-6'>
        Built by{' '}
        <a
          className='underline text-gray-500 hover:text-gray-300 transition duration-500 ease-out'
          href='https://twitter.com/imjoshellis'
          target='_blank'
          rel='noopener noreferrer'
        >
          @imjoshellis
        </a>
      </motion.h2>

      <AnimatePresence>
        <PageToggle />
      </AnimatePresence>
      <motion.div
        positionTransition
        initial={{ opacity: buttonRowOpacity }}
        animate={{ opacity: buttonRowOpacity }}
        className='grid grid-cols-2 gap-4 mt-12'
      >
        <Button
          click={reset}
          colorStyle='text-red-900 bg-red-300 hover:bg-red-200'
        >
          <ArrowBack height={24} width={24} />
          RESET
        </Button>
        <Button
          click={() => startFn(playerCount)}
          colorStyle='text-green-900 bg-green-400 hover:bg-green-300'
        >
          <Shuffle2 height={24} width={24} />
          REROLL
        </Button>
      </motion.div>
    </div>
  )
}