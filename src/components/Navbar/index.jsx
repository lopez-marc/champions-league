import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

import Login from '../Login'
import Register from '../Register'

import NavLogo from '../../assets/statics/logo.svg'
import Modal from '../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import './styles.css'
import PhoneNavbar from '../PhoneNavbar'

export default function Navbar ({ setRoute, route }) {
  const [showModal, setShowModal] = useState(false)
  const [isRegistered, setIsRegistered] = useState(true)
  const [showPhoneNavbar, setShowPhoneNavbar] = useState(false)

  const { authenticated, loginWithGoogle, logoutUser } = useUserContext()

  // const toggleModal = () => {
  //   setShowModal(!showModal)
  // }

  const handleGoogle = () => {
    loginWithGoogle()
  }

  return (
    <>
      <header id='mainNavigation'>
        <img id='NavLogo' src={NavLogo} alt='' />

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
            {authenticated ? (
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
            )}
            <li className='label-small'>
              <FontAwesomeIcon
                icon={faBars}
                size='2x'
                onClick={() => setShowPhoneNavbar(!showPhoneNavbar)}
              />
            </li>
          </ul>
        </nav>
      </header>
      {showPhoneNavbar ? <PhoneNavbar /> : null}
      {showModal ? (
        <Modal>
          {isRegistered ? (
            <Login
              setIsRegistered={setIsRegistered}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : (
            <Register
              setIsRegistered={setIsRegistered}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </Modal>
      ) : null}
    </>
  )
}
