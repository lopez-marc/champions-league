import { useState } from 'react'
import RoundOf16Combinations from '../../components/RoundOf16Combinations'
import RoundOf16Fixtures from '../../components/RoundOf16Fixtures'
import RoundOf16Hypothesis from '../../components/RoundOf16Hypothesis'
import RoundOf16Navbar from '../../components/RoundOf16Navbar'

import './styles.css'

export default function RoundOf16 () {
  const [showHypothesis, setShowHypothesis] = useState(true)
  return (
    <>
      <RoundOf16Navbar
        showHypothesis={showHypothesis}
        setShowHypothesis={setShowHypothesis}
      />
      <div id='group-of-16-page'>
        <div id='group-of-16'>
          {/* <h2>Clubs in the draw Stage</h2> */}
          {showHypothesis ? (
            <RoundOf16Hypothesis />
          ) : (
            <>
              <RoundOf16Fixtures />
              <RoundOf16Combinations />
            </>
          )}
        </div>
      </div>
    </>
  )
}
