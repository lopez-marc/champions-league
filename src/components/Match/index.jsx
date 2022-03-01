import React, { useEffect, useState } from 'react'
import putFixture from '../../services/putFixture'
// import resetFixture from '../../services/resetFixture'
import getStandings from '../../services/getStandings.jsx'
import getFixtures from '../../services/getFixtures.jsx'
import { useUserContext } from '../../contexts/UserContext'
import { useDataContext } from '../../contexts/DataContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRotateLeft,
  faCheck,
  faMinus,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function Match ({ match }) {
  const { setFixtures, fixtures, setStandings } = useDataContext()
  // const fixture = fixtures.data.find(item => item.fixtureID === match.fixtureID)
  const [thisMatch, setThisMatch] = useState(match)
  const [isHidden, setIsHidden] = useState(true)
  const { token } = useUserContext()

  useEffect(() => {
    if (match.goals.home === null || match.goals.away === null) {
      console.log(match.goals.home === null)

      setThisMatch(match => ({
        ...match,
        goals: {
          home: 0,
          away: 0
        }
      }))
    } else {
      setThisMatch(match)
    }

    // console.log(thisMatch)
  }, [match])

  // !in handleUpdate
  // useEffect(() => {
  //     getStandings().then(setStandings)
  //   }, [state])

  const updateHomeGoals = event => {
    setThisMatch(thisMatch => ({
      ...thisMatch,
      goals: {
        away: thisMatch.goals.away,
        home: event.target.value
      }
    }))
  }
  const updateAwayGoals = event => {
    setThisMatch(thisMatch => ({
      ...thisMatch,
      goals: {
        home: thisMatch.goals.home,
        away: event.target.value
      }
    }))
  }

  const handleCancel = event => {
    event.preventDefault()
    setIsHidden(true)
  }

  const handleUpdate = event => {
    event.preventDefault()
    // console.log(event)
    const jsonUpdatedMatch = JSON.stringify(thisMatch)
    putFixture(match.fixtureID, jsonUpdatedMatch, token)
    getFixtures(token).then(setFixtures)
    getStandings(token).then(setStandings)
    setIsHidden(true)
  }
  const handleReset = event => {
    event.preventDefault()
    // resetFixture(match.fixtureID).then()
    getFixtures().then(setFixtures)
    setIsHidden(true)
  }

  return (
    <form
      key={match.id}
      data-fixtureID={match.fixtureID}
      data-status={match.status}
    >
      <div className='match'>
        {/* <p>{match.group}</p>
        <p>{match.time}</p> */}

        <div className='home'>
          <label for='home'>{match.teams.home.name}</label>
          <img
            src={`https://media.api-sports.io/football/teams/${match.teams.home.id}.png`}
            alt={match.teams.home.name}
            className='crest'
          />
          <input
            type='number'
            name='home'
            value={thisMatch.goals.home}
            onChange={updateHomeGoals}
            onClick={() => setIsHidden(false)}
          />
        </div>
        <div className='dash'>
          <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className='away'>
          <input
            type='number'
            name='away'
            value={thisMatch.goals.away}
            onChange={updateAwayGoals}
            onClick={() => setIsHidden(false)}
          />
          <img
            src={`https://media.api-sports.io/football/teams/${match.teams.away.id}.png`}
            alt={match.teams.away.name}
            className='crest'
          />
          <label for='away'>{match.teams.away.name}</label>
        </div>
      </div>
      <div className={isHidden ? 'hiddenButtons' : null}>
        <div className='buttons'>
          <span onClick={handleCancel}>
            <FontAwesomeIcon icon={faXmark} className='fontAwesomeIcon' />
            Cancel
          </span>
          <span onClick={handleUpdate}>
            <FontAwesomeIcon icon={faCheck} className='fontAwesomeIcon' />
            Update
          </span>
          <span onClick={handleReset}>
            <FontAwesomeIcon icon={faRotateLeft} className='fontAwesomeIcon' />
            Reset
          </span>
        </div>
      </div>
    </form>
  )
}
