import { useState } from 'react'
import { useDataContext } from '../../contexts/DataContext'

export default function RoundOf16Combinations () {
  const { groupWinners, groupRunnersUp } = useDataContext()
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedList, setSelectedList] = useState()

  const handleSelectedTeam = event => {
    setSelectedList(event.currentTarget.parentElement.parentElement.id)

    setSelectedTeam({
      name: event.currentTarget.dataset.team,
      group: event.currentTarget.dataset.group,
      country: event.currentTarget.dataset.country
    })
  }

  return (
    <>
      <h3>Possible combinations</h3>
      <div id='group-of-16-combinations'>
        <div id='group-winners'>
          <h3>Group winners</h3>
          <div className='team-list'>
            {groupWinners &&
              groupWinners.map(element => {
                return (
                  <div
                    key={element.team.name}
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
                    key={element.team.name}
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
    </>
  )
}
