import React from 'react'
import PlayerSeats from './PlayerSeats'
import StartPlayerIcon from './StartPlayerIcon'

interface SpinnerTypes {
  startPlayer: number
  playerCount: number
  chooseStartPlayer: () => void
  lastRotation: number
  startRotation: number
  isRotationClockwise: boolean
}

export const Spinner: React.FC<SpinnerTypes> = ({
  startPlayer,
  playerCount,
  chooseStartPlayer,
  lastRotation,
  startRotation,
  isRotationClockwise
}) => {
  return (
    <div className='dotWrap'>
      <PlayerSeats startPlayer={startPlayer} playerCount={playerCount} />
      <div className='m-auto startBox'>
        <StartPlayerIcon
          chooseStartPlayer={chooseStartPlayer}
          isRotationClockwise={isRotationClockwise}
          lastRotation={lastRotation}
          startRotation={startRotation}
        />
      </div>
    </div>
  )
}

export default Spinner
