import React, { useState, useEffect, createContext, useContext } from 'react'
import getFixtures from '../services/getFixtures.jsx'
import getStandings from '../services/getStandings.jsx'
import getDefaultFixtures from '../services/getDefaultFixtures.jsx'
import getDefaultStandings from '../services/getDefaultStandings.jsx'
import { useUserContext } from './UserContext.jsx'

export const DataContext = createContext({})

export const useDataContext = () => {
  return useContext(DataContext)
}

export function DataContextProvider ({ children }) {
  const [fixtures, setFixtures] = useState()
  const [standings, setStandings] = useState()
  const [matchDay, setMatchDay] = useState(1)
  const [groupWinners, setGroupWinners] = useState()
  const [groupRunnersUp, setGroupRunnersUp] = useState()

  const { token } = useUserContext()

  useEffect(() => {
    if (token) {
      getFixtures(token).then(setFixtures)
      getStandings(token).then(setStandings)
    } else {
      getDefaultFixtures().then(setFixtures)
      getDefaultStandings().then(setStandings)
    }
  }, [token])

  const groupsLetters = standings
    ? [...new Set(standings.data.map(item => item.group).sort())]
    : null

  const uniqueArrayOfDays = fixtures
    ? [
        ...new Set(
          fixtures.data
            .filter(item => item.round.includes(matchDay))
            .map(item => item.day)
        )
      ]
    : null

  useEffect(() => {
    if (standings) {
      const winners = standings.data
        .filter(item => item.rank === 1)
        .sort((a, b) => a.group > b.group)

      setGroupWinners(winners)

      const runners = standings.data
        .filter(item => item.rank === 2)
        .sort((a, b) => a.group > b.group)

      setGroupRunnersUp(runners)
    }
  }, [standings])

  return (
    <DataContext.Provider
      value={{
        fixtures,
        setFixtures,
        standings,
        setStandings,
        groupsLetters,
        uniqueArrayOfDays,
        matchDay,
        setMatchDay,
        groupWinners,
        groupRunnersUp
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
