import React, { useCallback, useContext, useEffect, useState } from 'react'
import PlayerCountContext from '../PlayerCountContext'
import {
  ArrowBack,
  Button,
  PlayerSeats,
  Shuffle,
  StartPlayerArrow
} from './index'

const StartPlayerSpinner: React.FC = () => {
  const { playerCount, setPlayerCount } = useContext(PlayerCountContext)!
  const [isRotationClockwise, setIsRotationClockwise] = useState(true)
  const [startPlayer, setStartPlayer] = useState(0)
  const [angle, setAngle] = useState({ next: 0, prev: 0 })

  const chooseStartPlayer = useCallback(() => {
    setIsRotationClockwise(state => !state)

    const newStartPlayer =
      Math.floor(Math.random() * Math.floor(playerCount)) + 1

    setStartPlayer(newStartPlayer)

    const next = (360 / playerCount) * newStartPlayer + 225
    setAngle(state => ({
      prev: state.next,
      next
    }))
  }, [playerCount])

  useEffect(() => {
    chooseStartPlayer()
  }, [chooseStartPlayer])

  const reset = () => {
    setPlayerCount(0)
    setStartPlayer(0)
  }

  return (
    <>
      <div className='dotWrap'>
        <PlayerSeats startPlayer={startPlayer} playerCount={playerCount} />
        <div className='m-auto startBox'>
          <StartPlayerArrow
            chooseStartPlayer={chooseStartPlayer}
            isRotationClockwise={isRotationClockwise}
            angle={angle}
          />
        </div>
      </div>
      <p className='text-sm font-bold text-gray-700'>(YOU)</p>
      <div className='grid grid-cols-2 gap-4 mt-12'>
        <Button
          handleClick={reset}
          colorStyle='text-red-900 bg-red-300 hover:bg-red-200'
          icon={<ArrowBack height='24' width='24' />}
          label='reset'
        />
        <Button
          handleClick={chooseStartPlayer}
          colorStyle='text-green-900 bg-green-400 hover:bg-green-300'
          icon={<Shuffle height='24' width='24' />}
          label='reroll'
        />
      </div>
    </>
  )
}

export default StartPlayerSpinner
