import React, { useMemo, useState } from 'react'
import './css/styles.css'
import './css/tailwind.css'
import { SpinnerPage } from './layouts'
import Header from './layouts/Header'
import MainLayout from './layouts/MainLayout'
import PickerPage from './layouts/PickerPage'
import PlayerCountContext from './PlayerCountContext'

export default function App () {
  const [playerCount, setPlayerCount] = useState(0)

  const providerStartPlayerCount = useMemo(
    () => ({ playerCount, setPlayerCount }),
    [playerCount, setPlayerCount]
  )

  return (
    <MainLayout>
      <Header />
      <PlayerCountContext.Provider value={providerStartPlayerCount}>
        {playerCount === 0 ? <PickerPage /> : <SpinnerPage />}
      </PlayerCountContext.Provider>
    </MainLayout>
  )
}
