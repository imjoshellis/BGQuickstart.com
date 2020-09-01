import React from 'react'
import { StartPlayerArrow, PlayerSeats } from './index'

interface SpinnerTypes {
  startPlayer: number
  playerCount: number
  chooseStartPlayer: () => void
  angle: {
    next: number
    prev: number
  }
  isRotationClockwise: boolean
}

const Spinner: React.FC<SpinnerTypes> = ({
  startPlayer,
  playerCount,
  chooseStartPlayer,
  angle,
  isRotationClockwise
}) => {
  return (
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
  )
}

export default Spinner
