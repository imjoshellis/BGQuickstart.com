import React from 'react'
import PlayerCountButton from '../components/PlayerCountButton'

const PLAYER_COUNTS = [2, 3, 4, 5, 6, 7, 8, 9, 10]

interface PickerPageProps {}

export const PickerPage: React.FC<PickerPageProps> = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {PLAYER_COUNTS.map(n => (
          <PlayerCountButton key={n} num={n} handleClick={() => null} />
        ))}
      </div>
    </>
  )
}

export default PickerPage
