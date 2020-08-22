import React from 'react'
import PlayerCount from './PlayerCount'

interface PickPageTypes {
  playerCountClick: (n: number) => void
}
export const PickPage: React.FC<PickPageTypes> = ({ playerCountClick }) => (
  <div className='flex-1'>
    <PlayerCount playerCountClick={playerCountClick} />
  </div>
)

export default PickPage
