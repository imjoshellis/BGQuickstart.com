import React from 'react'
import Spinner from './Spinner'

interface SpinPageTypes {
  startPlayer: number
  playerCount: number
  startFn: (n: number) => void
  lastRotation: number
  startRotation: number
  on: boolean
  setOn: (v: React.SetStateAction<boolean>) => void
}
export const SpinPage: React.FC<SpinPageTypes> = ({
  startPlayer,
  playerCount,
  startFn,
  lastRotation,
  startRotation,
  on,
  setOn
}) => (
  <>
    <Spinner
      on={on}
      setOn={setOn}
      startPlayer={startPlayer}
      playerCount={playerCount}
      startFn={startFn}
      lastRotation={lastRotation}
      startRotation={startRotation}
    />
    <p className='text-sm font-bold text-gray-700'>(YOU)</p>
  </>
)

export default SpinPage
