import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'

import { UserContextProvider } from './contexts/UserContext'
import { DataContextProvider } from './contexts/DataContext'

import GroupStage from './pages/GroupStage'
import FinalStage from './pages/FinalStage'

import Navbar from './components/Navbar'
import RoundOf16 from './pages/RoundOf16'

function App () {
  return (
    <BrowserRouter basename='/champions-league'>
      <UserContextProvider>
        <DataContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<GroupStage />} />
            <Route path='/round-of-16' element={<RoundOf16 />} />
            <Route path='/final-stage' element={<FinalStage />} />
          </Routes>
        </DataContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
