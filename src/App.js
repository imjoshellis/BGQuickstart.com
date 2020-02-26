import { AnimatePresence, motion } from 'framer-motion'
import range from 'lodash-es/range'
import React from 'react'
import ArrowBack from './arrow-back'
import './css/main.css'
import './css/styles.css'
import Shuffle2 from './shuffle-2'

export default function App () {
  const [startPlayer, setStartPlayer] = React.useState(0)
  const [playerCount, setPlayerCount] = React.useState(0)
  const [picked, setPicked] = React.useState(false)
  const [startRotation, setStartRotation] = React.useState(0)
  const [lastRotation, setLastRotation] = React.useState(0)
  const [buttonRowOpacity, setButtonRowOpacity] = React.useState(0)
  const trueH = window.innerHeight

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

  const PlayerCountButton = ({ num }) => {
    const styles =
      'py-8 px-8 text-gray-900 bg-gray-600 rounded-lg text-xl font-bold cursor-pointer shadow'
    let delay = 0
    switch (num) {
      case 6:
        delay = 0
        break
      case 3:
      case 5:
      case 7:
      case 9:
        delay = 0.05
        break
      case 2:
      case 4:
      case 8:
      case 10:
        delay = 0.1
        break
      default:
        delay = 0
    }
    return (
      <motion.div
        whileHover={{ scale: 1.05, backgroundColor: '#CCD5E1' }}
        whileTap={{ scale: 0.95, backgroundColor: '#EDF2F7' }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: delay }}
        className={styles}
        onClick={() => playerCountClick(num)}
      >
        {num}
      </motion.div>
    )
  }

  const PlayerCount = () => {
    const playerCounts = [2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <div className='grid grid-cols-3 gap-4'>
        {playerCounts.map(n => (
          <PlayerCountButton key={n} num={n} />
        ))}
        {/* TODO: Add custom option that takes input
         <div className="w-1/3 m-2 py-8 px-8 text-gray-800 bg-gray-400 rounded text-xl font-bold cursor-pointer shadow-lg flex-grow">CUSTOM</div> */}
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

  const StartPlayerIcon = () => {
    return (
      <motion.div
        initial={{ width: 56, height: 56, rotate: lastRotation }}
        animate={{ width: 48, height: 48, rotate: 360 * 3 + startRotation }}
        transition={{ duration: 0.3 }}
        whileHover={{ backgroundColor: '#fafafa' }}
        onClick={() => startFn(playerCount)}
        className='start rounded-full text-blue-400 flex flex-col items-center justify-center bg-blue-100'
      >
        <div className='startIcon w-2/3 flex flex-col items-center justify-center'>
          <ArrowBack />
        </div>
      </motion.div>
    )
  }

  const Spinner = () => {
    return (
      <div className='dotWrap'>
        <PlayerSeats startPlayer={startPlayer} />
        <div className='startBox m-auto'>
          <StartPlayerIcon />
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
    <div
      style={{ height: trueH }}
      className='App text-gray-300 bg-gray-900 w-screen flex flex-col items-center justify-center py-8 px-4'
    >
      <motion.h1
        positionTransition
        className='text-gray-200 font-bold text-4xl mb-6'
      >
        BG QuickStart
      </motion.h1>
      <AnimatePresence>
        <PageToggle />
      </AnimatePresence>
      <motion.div
        positionTransition
        initial={{ opacity: buttonRowOpacity }}
        animate={{ opacity: buttonRowOpacity }}
        className='grid grid-cols-2 gap-4 mt-12'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className='flex flex-row justify-center items-center p-3 px-4 text-red-900 bg-red-400 rounded font-bold cursor-pointer shadow-lg'
        >
          <ArrowBack height={24} width={24} />
          <div className='ml-1'>RESET</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => startFn(playerCount)}
          className='flex flex-row justify-center items-center p-3 px-4 text-green-900 bg-green-400 rounded font-bold cursor-pointer shadow-lg'
        >
          <Shuffle2 height={24} width={24} />
          <div className='ml-1'>REROLL</div>
        </motion.div>
      </motion.div>
    </div>
  )
}
