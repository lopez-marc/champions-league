import React, { useState, useEffect, createContext, useContext } from 'react'
import getFixtures from '../services/getFixtures.jsx'
import getStandings from '../services/getStandings.jsx'
import getFinalStage from '../services/getFinalStage.jsx'
import getDefaultFixtures from '../services/getDefaultFixtures.jsx'
import getDefaultStandings from '../services/getDefaultStandings.jsx'
import getDefaultFinalStage from '../services/getDefaultFinalStage.jsx'

import { useUserContext } from './UserContext.jsx'

import { useLocalStorage } from '../hooks/useLocalStorage.jsx'

export const DataContext = createContext({})

export const useDataContext = () => {
  return useContext(DataContext)
}

export function DataContextProvider ({ children }) {
  const [fixtures, setFixtures] = useState()
  const [standings, setStandings] = useState()
  const [finalStage, setFinalStage] = useState()
  const [finalStageTwoLegs, setFinalStageTwoLegs] = useState()

  const [matchDay, setMatchDay] = useState(1)
  const [groupWinners, setGroupWinners] = useLocalStorage('cl-group-winner', [])
  const [groupRunnersUp, setGroupRunnersUp] = useLocalStorage(
    'cl-group-runners-up',
    []
  )
  const [uniqueArrayOfDays, setUniqueArrayOfDays] = useState()

  const { token } = useUserContext()

  useEffect(() => {
    if (token) {
      getFixtures(token).then(setFixtures)
      getStandings(token).then(setStandings)
      getFinalStage(token).then(setFinalStage)
    } else {
      getDefaultFixtures().then(setFixtures)
      getDefaultStandings().then(setStandings)
      getDefaultFinalStage().then(setFinalStage)
    }
  }, [token])

  const groupsLetters = standings
    ? [...new Set(standings.data.map(item => item.group).sort())]
    : null

  useEffect(() => {
    if (fixtures) {
      const arrayOfDays = [
        ...new Set(
          fixtures.data
            .filter(item => item.round.includes(matchDay))
            .map(item => item.day)
        )
      ]
      setUniqueArrayOfDays(arrayOfDays)
    }
  }, [fixtures, matchDay])

  useEffect(() => {
    if (finalStage) {
      const finalStageSortedByDate = finalStage.data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )

      const finalStageFirstHalf = finalStageSortedByDate.slice(
        0,
        finalStage.data.length / 2
      )
      const finalStageSecondHalf = finalStageSortedByDate.slice(
        -finalStage.data.length / 2
      )

      const finalStagReordered = finalStageFirstHalf.map(element => {
        const secondLegElement = finalStageSecondHalf.find(
          secondElement =>
            element.teams.home.name === secondElement.teams.away.name
        )

        return { firstLeg: element, secondLeg: secondLegElement }
      })

      setFinalStageTwoLegs(finalStagReordered)
    }
  }, [finalStage])

  useEffect(() => {
    if (standings) {
      const winners = standings.data
        .filter(item => item.rank === 1)
        .sort((a, b) => a.group > b.group)

      if (groupWinners === null || groupWinners.length === 0) {
        setGroupWinners(winners)
      } else {
        const sameWinners = winners.filter(winner => {
          return groupWinners.map(groupWinner => {
            if (winner.team.name === groupWinner.team.name) {
              return true
            }
            return false
          })
        })

        if (sameWinners.length !== 8) {
          setGroupWinners(winners)
        }
      }

      const runners = standings.data
        .filter(item => item.rank === 2)
        .sort((a, b) => a.group > b.group)

      if (groupRunnersUp === null || groupRunnersUp.length === 0) {
        setGroupRunnersUp(runners)
      } else {
        const sameRunners = runners.filter(runner => {
          return groupRunnersUp.map(groupRunner => {
            if (runner.team.name === groupRunner.team.name) {
              return true
            }
            return false
          })
        })
        if (sameRunners.length !== 8) {
          setGroupRunnersUp(runners)
        }
      }
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
        groupRunnersUp,
        finalStageTwoLegs,
        setGroupWinners,
        setGroupRunnersUp
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
