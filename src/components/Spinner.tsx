import React from 'react'
import PlayerSeats from './PlayerSeats'
import StartPlayerIcon from './StartPlayerIcon'

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

export const Spinner: React.FC<SpinnerTypes> = ({
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
        <StartPlayerIcon
          chooseStartPlayer={chooseStartPlayer}
          isRotationClockwise={isRotationClockwise}
          angle={angle}
        />
      </div>
    </div>
  )
}

export default Spinner
