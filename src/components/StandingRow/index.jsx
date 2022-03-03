import React from 'react'

import './styles.css'

export default function StandingRow ({ team }) {
  return (
    <tr>
      <span className='team-name'>
        <img
          src={`https://media.api-sports.io/football/teams/${team.team.id}.png`}
          alt={team.team.name}
          className='crest'
        />
        {team.team.name}
      </span>
      <td>{team.games.played}</td>
      <td>{team.games.win}</td>
      <td>{team.games.draw}</td>
      <td>{team.games.lose}</td>
      <td className='label-big'>{team.goals.for}</td>
      <td className='label-big'>{team.goals.against}</td>
      <td className='label-big'>{team.goals.difference}</td>
      <td>
        <strong>{team.points}</strong>
      </td>
    </tr>
  )
}
