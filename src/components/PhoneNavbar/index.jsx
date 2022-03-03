import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

import Login from '../Login'
import Register from '../Register'

import NavLogo from '../../assets/statics/logo.svg'
import Modal from '../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import './styles.css'

export default function PhoneNavbar () {
  const [isRegistered, setIsRegistered] = useState(true)

  const { authenticated, loginWithGoogle, logoutUser } = useUserContext()

  const handleGoogle = () => {
    loginWithGoogle()
  }

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