import React from 'react'
import { PlayerSeat } from './index'

interface PlayerSeatsTypes {
  playerCount: number
  startPlayer: number
}

const PlayerSeats: React.FC<PlayerSeatsTypes> = ({
  playerCount,
  startPlayer
}) => {
  const playerSeats = [] as number[]
  for (let i = 1; i <= playerCount; i++) {
    playerSeats.push(i)
  }

  return (
    <>
      {playerSeats.map(seatNumber => {
        const angle = (360 / playerCount) * seatNumber + 225 + 'deg'
        const rotateString = 'rotate(' + angle + ')'
        return (
          <PlayerSeat
            key={'player-seat-' + seatNumber}
            seatNumber={seatNumber}
            rotateString={rotateString}
            startPlayer={startPlayer}
          />
        )
      })}
    </>
  )
}

export default PlayerSeats
