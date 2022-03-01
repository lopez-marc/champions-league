import React, { useState } from 'react'
import { useUserContext } from '../../contexts/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function Login ({ setIsRegistered, showModal, setShowModal }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [userHasAuthenticated, setAunthenticated] = useState(false)

  const handleGroupSubmit = event => {
    // event.preventDefault()
    // console.log('email', email)
    // console.log('password', password)
    // const loginDetails = {
    //   email: email,
    //   password: password
    // }
    // const jsonLoginDetails = JSON.stringify(loginDetails)
    // login(jsonLoginDetails)
  }

  const emailOnChange = event => {
    setEmail(event.target.value)
  }
  const passwordOnChange = event => {
    setPassword(event.target.value)
  }

  const handleRegister = event => {
    event.preventDefault()
    setIsRegistered(false)
  }

  const { loginWithGoogle } = useUserContext()

  const handleGoogle = () => {
    loginWithGoogle()
    setShowModal(false)
  }

  return (
    <>
      <div className='signin-close'>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setShowModal(false)}
          size='2x'
        />
      </div>
      <h3>Login</h3>
      <form id='signin_form' onSubmit={handleGroupSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          onChange={emailOnChange}
          type='text'
          value={email}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          onChange={passwordOnChange}
          type='password'
          value={password}
        />
        <button>Sign in</button>
        <button onClick={handleGoogle}>
          <FontAwesomeIcon icon={faGoogle} />
          Login with Google
        </button>
        <p>
          Not still registered? Click{' '}
          <span onClick={handleRegister} className='link'>
            here
          </span>
        </p>
      </form>
    </>
  )
}
