import React from 'react'
import PlayerSeat from './PlayerSeat'
import range from 'lodash-es/range'

interface PlayerSeatsTypes {
  playerCount: number
  startPlayer: number
}

export const PlayerSeats: React.FC<PlayerSeatsTypes> = ({
  playerCount,
  startPlayer
}) => {
  const playerSeats = range(playerCount)
  return (
    <>
      {playerSeats.map(pIdx => {
        const rotation = (360 / playerCount) * pIdx + 225 + 'deg'
        const rotateItem = 'rotate(' + rotation + ')'
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
