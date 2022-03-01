import React from 'react'
import { useDataContext } from '../../contexts/DataContext.jsx'
import Match from '../../components/Match/index.jsx'
import Standing from '../../components/Standing/index.jsx'
import GroupNavbar from '../../components/GroupNavbar/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretSquareLeft,
  faCaretSquareRight
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function GroupStage () {
  const {
    fixtures,
    matchDay,
    setMatchDay,
    groupsLetters,
    uniqueArrayOfDays
  } = useDataContext()

  return (
    <>
      <GroupNavbar />
      <main id='groupStagePage'>
        <div id='groupStage'>
          <div id='groupStageMatches'>
            <div id='matchDayTitle'>
              {matchDay > 1 ? (
                <FontAwesomeIcon
                  icon={faCaretSquareLeft}
                  onClick={() => setMatchDay(matchDay - 1)}
                  className='fontAwesomeArrows'
                />
              ) : null}
              <h2>Matchday {matchDay}</h2>
              {matchDay < 6 ? (
                <FontAwesomeIcon
                  icon={faCaretSquareRight}
                  onClick={() => setMatchDay(matchDay + 1)}
                  className='fontAwesomeArrows'
                />
              ) : null}
            </div>
            {uniqueArrayOfDays ? (
              uniqueArrayOfDays.map(day => {
                return (
                  <>
                    <h3 key={day} className='matchDayDate'>
                      {day}
                    </h3>
                    {fixtures
                      ? fixtures.data
                          .sort((a, b) => a.group > b.group)
                          .filter(item => {
                            return item.day.includes(day) ? true : false
                          })
                          .map(item => <Match match={item} />)
                      : null}
                  </>
                )
              })
            ) : (
              <p>Is loading...</p>
            )}
          </div>
          <div id='groupStageStandings'>
            <div id='standingsTitle'>
              <h2>Standings</h2>
            </div>
            {groupsLetters ? (
              groupsLetters.map(group => <Standing group={group} />)
            ) : (
              <p>Is loading...</p>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
