import { NavLink } from 'react-router-dom'

import './styles.css'

export default function PhoneNavbar () {
  return (
    <>
      <header id='phoneMainNavigation'>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Group Stage</NavLink>
            </li>
            <li>
              <NavLink to='/round-of-16'>Round of 16</NavLink>
            </li>
            {/* <li>
              <NavLink to='/final-stage'>Final Stage</NavLink>
            </li> */}
            {/* {authenticated ? (
              <li>
                <span id='navUserButton' onClick={logoutUser}>
                  <FontAwesomeIcon icon={faCircleUser} />
                  Logout
                </span>
              </li>
            ) : (
              <li>
                <span id='navUserButton' onClick={handleGoogle}>
                  <FontAwesomeIcon icon={faGoogle} />
                  Login with Google
                </span>
              </li>
            )} */}
          </ul>
        </nav>
      </header>
    </>
  )
}
