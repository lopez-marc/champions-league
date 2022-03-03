import { useDataContext } from '../../contexts/DataContext'

export default function RoundOf16Fixtures () {
  const { finalStageTwoLegs } = useDataContext()

  return (
    <>
      <h3>Fixtures</h3>
      <div id='group-of-16-fixtures'>
        {finalStageTwoLegs &&
          finalStageTwoLegs.map(element => {
            console.log(element)
            return (
              <table>
                <thead>
                  <tr>
                    <th class='table_team-name'></th>
                    <th class='table_team-first-leg'>
                      <span class='label--big'>{element.firstLeg.day}</span>
                    </th>
                    <th class='table_team-second-leg'>
                      <span class='label--big'>{element.secondLeg.day}</span>
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
    </>
  )
}
