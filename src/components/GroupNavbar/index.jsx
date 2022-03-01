import { NavLink } from 'react-router-dom'

import './styles.css'

export default function GroupNavbar () {
  return (
    <header id='groupNavigation'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Group Stage</NavLink>
          </li>
          <li>
            <NavLink to='/final-stage'>Final Stage</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
