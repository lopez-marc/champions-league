import { useState } from 'react'
import { useDataContext } from '../../contexts/DataContext'

import './styles.css'

export default function RoundOf16 () {
  const { groupWinners, groupRunnersUp, finalStageTwoLegs } = useDataContext()
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedList, setSelectedList] = useState()

  const handleSelectedTeam = event => {
    setSelectedList(event.target.parentElement.parentElement.id)

    setSelectedTeam({
      name: event.target.dataset.team,
      group: event.target.dataset.group,
      country: event.target.dataset.country
    })
  }

  return (
    <div id='group-of-16'>
      {/* <h2>Clubs in the draw Stage</h2> */}
      <div id='group-of-16-combinations'>
        <div id='group-winners'>
          <h3>Group winners</h3>
          <div className='team-list'>
            {groupWinners &&
              groupWinners.map(element => {
                return (
                  <div
                    className={
                      selectedTeam.name === element.team.name
                        ? 'team active'
                        : selectedTeam.name !== undefined &&
                          element.group !== selectedTeam.group &&
                          element.team.country !== selectedTeam.country &&
                          selectedList !== 'group-winners'
                        ? 'team against'
                        : 'team'
                    }
                    data-team={element.team.name}
                    data-group={element.group}
                    data-country={element.team.country}
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
        <div id='group-runners-up'>
          <h3>Group Runners-Up</h3>
          <div className='team-list'>
            {groupRunnersUp &&
              groupRunnersUp.map(element => {
                return (
                  <div
                    className={
                      selectedTeam.name === element.team.name
                        ? 'team active'
                        : selectedTeam.name !== undefined &&
                          element.group !== selectedTeam.group &&
                          element.team.country !== selectedTeam.country &&
                          selectedList !== 'group-runners-up'
                        ? 'team against'
                        : 'team'
                    }
                    data-team={element.team.name}
                    data-group={element.group}
                    data-country={element.team.country}
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
      <h3>Fixtures</h3>
      <div id='group-of-16-fixtures'>
        {finalStageTwoLegs &&
          finalStageTwoLegs.map(element => {
            const firstLegDay = element.firstLeg.day.slice(0, -5)
            const secondLegDay = element.secondLeg.day.slice(0, -5)

            return (
              <table>
                <thead>
                  <tr>
                    <th class='table_team-name'></th>
                    <th class='table_team-first-leg'>
                      <span class='label--big'>{firstLegDay}</span>
                    </th>
                    <th class='table_team-second-leg'>
                      <span class='label--big'>{secondLegDay}</span>
                    </th>
                  </tr>
                </thead>
                <tr>
                  <td className='team-name'>
                    <span>
                      <img
                        src={`https://media.api-sports.io/football/teams/${element.firstLeg.teams.home.id}.png`}
                        alt={element.firstLeg.teams.home.name}
                        className='crest'
                      />
                      {element.firstLeg.teams.home.name}
                    </span>
                  </td>
                  <td>{element.firstLeg.goals.home}</td>
                  <td>{element.secondLeg.goals.away}</td>
                </tr>
                <tr>
                  <td className='team-name'>
                    <span>
                      <img
                        src={`https://media.api-sports.io/football/teams/${element.firstLeg.teams.away.id}.png`}
                        alt={element.firstLeg.teams.away.name}
                        className='crest'
                      />
                      {element.firstLeg.teams.away.name}
                    </span>
                  </td>
                  <td>{element.firstLeg.goals.away}</td>
                  <td>{element.secondLeg.goals.home}</td>
                </tr>
              </table>
            )
          })}
      </div>
    </div>
  )
}
