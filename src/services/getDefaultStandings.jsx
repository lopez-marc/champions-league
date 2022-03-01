import axios from 'axios'

const getDefaultStandings = async token => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api-standing`
  )

  return res.data
}

export default getDefaultStandings
