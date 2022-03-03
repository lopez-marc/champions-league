import React, { useState } from 'react'

import './styles.css'

export default function Login ({ setIsRegistered, showModal, setShowModal }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [userHasAuthenticated, setAuthenticated] = useState(false)

  const handleGroupSubmit = event => {
    event.preventDefault()
    // console.log('email', email)
    // console.log('password', password)

    // const loginDetails = {
    //   email: email,
    //   password: password
    // }

    // const jsonLoginDetails = JSON.stringify(loginDetails)

    // const settings = {
    //   method: 'POST',
    //   body: jsonLoginDetails,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    // fetch('http://localhost:3008/signin', settings)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.token)
    //     setAuthenticated(true)
    //   })
  }

  const emailOnChange = event => {
    setEmail(event.target.value)
  }
  const passwordOnChange = event => {
    setPassword(event.target.value)
  }

  const handleRegister = event => {
    event.preventDefault()
    setIsRegistered(true)
  }

  return (
    <>
      <h3>Register</h3>
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
        <p>
          Already registered? Click{' '}
          <span onClick={handleRegister} className='link'>
            here
          </span>
        </p>
      </form>
    </>
  )
}
