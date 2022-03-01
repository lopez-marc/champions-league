import React, { useState, createContext, useContext, useEffect } from 'react'
import { signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../config/firebase-config'
import signInWithGoogle from '../services/signInWithGoogle'

export const UserContext = createContext({})

export const useUserContext = () => {
  return useContext(UserContext)
}

export function UserContextProvider ({ children }) {
  const [authenticated, setAuthenticated] = useState(
    false || window.localStorage.getItem('cl-auth') === 'true'
  )
  const [token, setToken] = useState('')

  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(userCredentials => {
        if (userCredentials) {
          setAuthenticated(true)
          window.localStorage.setItem('cl-auth', 'true')
        }
        return userCredentials
      })
      .then(signInWithGoogle(token))
  }

  useEffect(() => {
    auth.onAuthStateChanged(userCredentials => {
      if (userCredentials) {
        setAuthenticated(true)
        window.localStorage.setItem('cl-auth', 'true')
        userCredentials.getIdToken().then(token => setToken(token))
      }
    })
  })

  const logoutUser = () => {
    window.localStorage.removeItem('cl-auth')
    signOut(auth)
    setAuthenticated(false)
  }

  return (
    <UserContext.Provider
      value={{
        authenticated,
        token,
        loginWithGoogle,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
