import React from 'react'
import { Spinner } from '../components'

interface SpinnerPageProps {}

export const SpinnerPage: React.FC<SpinnerPageProps> = () => {
  return (
    <>
      <Spinner
        on={true}
        setOn={() => null}
        startPlayer={1}
        playerCount={2}
        startFn={() => null}
        lastRotation={0}
        startRotation={0}
      />
      <p className='text-sm font-bold text-gray-700'>(YOU)</p>
    </>
  )
}

export default SpinnerPage
