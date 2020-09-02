import React from 'react'

type PlayerCountContextType = {
  theme: string
  setTheme: (value: string) => void
}

const PlayerCountContext = React.createContext<{
  playerCount: number
  setPlayerCount: (n: number) => void
} | null>(null)

export default PlayerCountContext
