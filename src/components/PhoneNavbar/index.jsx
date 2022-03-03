import { Link } from 'react-router-dom'

import './styles.css'

export default function PhoneNavbar ({ setRoute, route }) {
  return (
    <>
      <header id='phoneMainNavigation'>
        <nav>
          <ul>
            <li>
              <Link
                to='#'
                className={route === 'GroupStage' ? 'active' : null}
                onClick={() => setRoute('GroupStage')}
              >
                Group Stage
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className={route === 'RoundOf16' ? 'active' : null}
                onClick={() => setRoute('RoundOf16')}
              >
                Round of 16
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
