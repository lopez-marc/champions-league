import { useEffect, useState } from 'react'

import { useDataContext } from '../../contexts/DataContext'

import {
  useLocalStorage,
  deleteLocalStorage,
  deleteMatchLocalStorage
} from '../../hooks/useLocalStorage'

import './styles.css'

export default function RoundOf16Hypothesis () {
  const {
    groupWinners,
    setGroupWinners,
    groupRunnersUp,
    setGroupRunnersUp
  } = useDataContext()
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedList, setSelectedList] = useState()
  const [selectedPair, setSelectedPair] = useState({})
  const [hypothesis, setHypothesis] = useLocalStorage('cl-hypothesis', [])

  const handleSelectedTeam = event => {
    // console.log(event.currentTarget.parentElement.parentElement.id)
    if (selectedTeam.name === event.currentTarget.dataset.team) {
      setSelectedTeam({})
      setSelectedPair({})
      setSelectedList()
    } else {
      setSelectedList(event.currentTarget.parentElement.parentElement.id)

      setSelectedTeam({
        name: event.currentTarget.dataset.team,
        group: event.currentTarget.dataset.group,
        country: event.currentTarget.dataset.country
      })
      if (Object.keys(selectedPair).length === 0) {
        const homeAway =
          event.currentTarget.parentElement.parentElement.id ===
          'group-runners-up'
            ? 'home'
            : 'away'
        setSelectedPair({
          [homeAway]: {
            name: event.currentTarget.dataset.team,
            id: event.currentTarget.dataset.id,
            list: event.currentTarget.parentElement.parentElement.id
          }
        })
      } else if (Object.keys(selectedPair).length !== 0) {
        const homeAway =
          event.currentTarget.parentElement.parentElement.id ===
          'group-runners-up'
            ? 'home'
            : 'away'
        setSelectedPair({
          ...selectedPair,
          [homeAway]: {
            name: event.currentTarget.dataset.team,
            id: event.currentTarget.dataset.id,
            list: event.currentTarget.parentElement.parentElement.id
          }
        })
        setSelectedTeam({})
      }
    }
  }

  useEffect(() => {
    if (Object.keys(selectedPair).length === 2) {
      setHypothesis([...hypothesis, selectedPair])

      const updatedWinners = groupWinners.map(element => {
        if (
          element.team.name === selectedPair.home.name ||
          element.team.name === selectedPair.away.name
        ) {
          return {
            ...element,
            inlist: true
          }
        }
        return element
      })

      setGroupWinners(updatedWinners)

      const updatedRunnersUp = groupRunnersUp.map(element => {
        if (
          element.team.name === selectedPair.home.name ||
          element.team.name === selectedPair.away.name
        ) {
          return {
            ...element,
            inlist: true
          }
        }
        return element
      })

      setGroupRunnersUp(updatedRunnersUp)

      setSelectedPair({})
    }
  }, [selectedPair])

  const clearHypothesis = () => {
    setHypothesis([])
    deleteLocalStorage('cl-hypothesis')
    const updatedWinners = groupWinners.map(element => {
      return {
        ...element,
        inlist: false
      }
    })

    setGroupWinners(updatedWinners)

    const updatedRunnersUp = groupRunnersUp.map(element => {
      return {
        ...element,
        inlist: false
      }
    })

    setGroupRunnersUp(updatedRunnersUp)

    setSelectedPair({})
    setSelectedTeam({})
    setSelectedList()
  }

  const clearMatch = event => {
    const newHypothesis = hypothesis.filter(
      element => element.home.name !== event.currentTarget.dataset.reference
    )

    deleteMatchLocalStorage('cl-hypothesis', newHypothesis)
    console.log(newHypothesis)

    const matchToClear = hypothesis.filter(
      element => element.home.name === event.currentTarget.dataset.reference
    )[0]

    console.log(matchToClear)

    const updatedWinners = groupWinners.map(element => {
      if (element.team.name === matchToClear.away.name) {
        return {
          ...element,
          inlist: false
        }
      }
      return element
    })

    setGroupWinners(updatedWinners)

    const updatedRunnersUp = groupRunnersUp.map(element => {
      if (element.team.name === matchToClear.home.name) {
        return {
          ...element,
          inlist: false
        }
      }
      return element
    })

    setGroupRunnersUp(updatedRunnersUp)

    setHypothesis(newHypothesis)
  }

  return (
    <>
      <div id='group-of-16-combinations'>
        <div id='group-winners'>
          <h3>Group winners</h3>
          <div className='team-list'>
            {groupWinners &&
              groupWinners.map(element => {
                return (
                  <div
                    className={
                      element.inlist
                        ? 'team disabled'
                        : selectedTeam.name === element.team.name
                        ? 'team active'
                        : selectedTeam.name !== undefined &&
                          element.group !== selectedTeam.group &&
                          element.team.country !== selectedTeam.country &&
                          selectedList !== 'group-winners'
                        ? 'team against'
                        : selectedTeam.name !== undefined
                        ? 'team not-against'
                        : 'team'
                    }
                    data-team={element.team.name}
                    data-group={element.group}
                    data-country={element.team.country}
                    data-id={element.team.id}
                    onClickCapture={e => handleSelectedTeam(e)}
                  >
                    <img
                      src={`https://media.api-sports.io/football/teams/${element.team.id}.png`}
                      alt={element.team.name}
                      className='crest'
                    />
                    <p>{element.team.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
        <div id='group-runners-up'>
          <h3>Group Runners-Up</h3>
          <div className='team-list'>
            {groupRunnersUp &&
              groupRunnersUp.map(element => {
                return (
                  <div
                    className={
                      element.inlist
                        ? 'team disabled'
                        : selectedTeam.name === element.team.name
                        ? 'team active'
                        : selectedTeam.name !== undefined &&
                          element.group !== selectedTeam.group &&
                          element.team.country !== selectedTeam.country &&
                          selectedList !== 'group-runners-up'
                        ? 'team against'
                        : selectedTeam.name !== undefined
                        ? 'team not-against'
                        : 'team'
                    }
                    data-team={element.team.name}
                    data-group={element.group}
                    data-country={element.team.country}
                    data-id={element.team.id}
                    onClick={e => handleSelectedTeam(e)}
                  >
                    <img
                      src={`https://media.api-sports.io/football/teams/${element.team.id}.png`}
                      alt={element.team.name}
                      className='crest'
                    />

                    <p>{element.team.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      {hypothesis.length !== 0 && (
        <>
          <h3>Your Fixtures</h3>
          <div id='group-of-16-hypothesis'>
            {hypothesis &&
              hypothesis.map(element => {
                return (
                  <table
                    data-reference={element.home.name}
                    onClick={e => clearMatch(e)}
                  >
                    <tr className='hypothesis-home'>
                      <td className='team-name'>
                        <span>{element.home.name}</span>
                        <img
                          src={`https://media.api-sports.io/football/teams/${element.home.id}.png`}
                          alt={element.home.name}
                          className='crest'
                        />
                      </td>
                    </tr>
                    <tr className='hypothesis-away'>
                      <td className='team-name'>
                        <img
                          src={`https://media.api-sports.io/football/teams/${element.away.id}.png`}
                          alt={element.away.name}
                          className='crest'
                        />
                        <span>{element.away.name}</span>
                      </td>
                    </tr>
                  </table>
                )
              })}
          </div>
          <div id='hypotesis-buttons'>
            <button onClick={clearHypothesis}>Clear</button>
          </div>
        </>
      )}
    </>
  )
}
