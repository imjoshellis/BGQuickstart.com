import React from 'react'
import PlayerCountButton from './PlayerCountButton'

interface PlayerCountTypes {
  playerCountClick: (n: number) => void
}
export const PlayerCount: React.FC<PlayerCountTypes> = ({
  playerCountClick
}) => {
  const playerCounts = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='grid grid-cols-3 gap-4'>
      {playerCounts.map(n => (
        <PlayerCountButton key={n} num={n} handleClick={playerCountClick} />
      ))}
    </div>
  )
}
export default PlayerCount
