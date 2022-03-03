import { Link } from 'react-router-dom'

import './styles.css'

export default function RoundOf16Navbar ({
  showHypothesis,
  setShowHypothesis
}) {
  return (
    <header id='roundOf16Navigation'>
      <nav>
        <ul>
          <li>
            <Link
              to='#'
              onClick={() => setShowHypothesis(!showHypothesis)}
              className={showHypothesis ? 'active' : null}
            >
              Draw your Fixtures
            </Link>
          </li>
          <li>
            <Link
              to='#'
              onClick={() => setShowHypothesis(!showHypothesis)}
              className={!showHypothesis ? 'active' : null}
            >
              Drawn Fixtures
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
