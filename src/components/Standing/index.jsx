import { useDataContext } from '../../contexts/DataContext.jsx'
import StandingRow from '../StandingRow/index.jsx'

import './styles.css'

export default function Standing ({ group }) {
  const { standings } = useDataContext()

  // console.log(standings)
  return (
    <div className='standing'>
      <h3>Group {group}</h3>
      <table>
        <thead>
          <tr>
            <th class='table_team-name'></th>
            <th class='table_team-played'>
              <span class='label--big'>Played</span>
              {/* <span class='label--small'>P</span> */}
            </th>
            <th class='table_team-won'>
              <span class='label--big'>Won</span>
              {/* <span class='label--small'>W</span> */}
            </th>
            <th class='table_team-drawn'>
              <span class='label--big'>Draws</span>
              {/* <span class='label--small'>D</span> */}
            </th>
            <th class='table_team-lost'>
              <span class='label--big'>Lost</span>
              {/* <span class='label--small'>L</span> */}
            </th>
            <th class='table_team-for'>
              <span class='label--big'>For</span>
            </th>
            <th class='table_team-against'>
              <span class='label--big'>Against</span>
            </th>
            <th class='table_team-goal-diff'>Difference</th>
            <th class='table_team-points'>
              <span class='label--big'>Points</span>
              {/* <span class='label--small'>Pts</span> */}
            </th>
          </tr>
        </thead>
        {standings ? (
          standings.data
            .filter(team => team.group.includes(group))
            .sort((a, b) => a.rank > b.rank)
            .map(team => <StandingRow team={team} />)
        ) : (
          <p>Is loading...</p>
        )}
      </table>
    </div>
  )
}
