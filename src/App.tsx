import React, { useMemo, useState } from 'react'
import './css/styles.css'
import './css/tailwind.css'
import Header from './layouts/Header'
import MainLayout from './layouts/MainLayout'
import PlayerCountContext from './PlayerCountContext'
import PlayerCountGrid from './PlayerCountGrid'
import StartPlayerSpinner from './StartPlayerSpinner'

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
        {playerCount === 0 ? <PlayerCountGrid /> : <StartPlayerSpinner />}
      </PlayerCountContext.Provider>
    </MainLayout>
  )
}
