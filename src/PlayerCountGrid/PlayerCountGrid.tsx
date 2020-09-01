import React from 'react'
import { PlayerCountButton } from './index'

const PLAYER_COUNTS = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const PlayerCountGrid: React.FC = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {PLAYER_COUNTS.map(n => (
          <PlayerCountButton key={n} num={n} />
        ))}
      </div>
    </>
  )
}

export default PlayerCountGrid
