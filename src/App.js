import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'

import { UserContextProvider } from './contexts/UserContext'
import { DataContextProvider } from './contexts/DataContext'

import GroupStage from './pages/GroupStage'
import FinalStage from './pages/FinalStage'

import Navbar from './components/Navbar'
import RoundOf16 from './pages/RoundOf16'
import { useState } from 'react'

function App () {
  const [route, setRoute] = useState('GroupStage')
  return (
    <BrowserRouter basename='/champions-league'>
      <UserContextProvider>
        <DataContextProvider>
          <Navbar setRoute={setRoute} route={route} />
          {route === 'GroupStage' ? (
            <GroupStage />
          ) : route === 'RoundOf16' ? (
            <RoundOf16 />
          ) : (
            <GroupStage />
          )}
        </DataContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
