import range from 'lodash-es/range'
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
  const playerSeats = range(playerCount)
  return (
    <>
      {playerSeats.map(pIdx => {
        const angle = (360 / playerCount) * pIdx + 225 + 'deg'
        const rotateItem = 'rotate(' + angle + ')'
        return (
          <PlayerSeat
            key={'player-seat-' + pIdx}
            pIdx={pIdx}
            rotateString={rotateItem}
            startPlayer={startPlayer}
            playerCount={playerCount}
          />
        )
      })}
    </>
  )
}

export default PlayerSeats
