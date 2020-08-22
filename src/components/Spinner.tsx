import React from 'react'
import PlayerSeats from './PlayerSeats'
import StartPlayerIcon from './StartPlayerIcon'

interface SpinnerTypes {
  startPlayer: number
  playerCount: number
  startFn: (n: number) => void
  lastRotation: number
  startRotation: number
  on: boolean
  setOn: (v: React.SetStateAction<boolean>) => void
}

export const Spinner: React.FC<SpinnerTypes> = ({
  startPlayer,
  on,
  setOn,
  playerCount,
  startFn,
  lastRotation,
  startRotation
}) => {
  return (
    <div className='dotWrap'>
      <PlayerSeats startPlayer={startPlayer} playerCount={playerCount} />
      <div className='m-auto startBox'>
        <StartPlayerIcon
          startFn={startFn}
          on={on}
          setOn={setOn}
          playerCount={playerCount}
          lastRotation={lastRotation}
          startRotation={startRotation}
        />
      </div>
    </div>
  )
}

export default Spinner
