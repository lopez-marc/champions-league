import axios from 'axios'

const getDefaultStandings = async () => {
  const res = await axios.get(`${process.env.REACT_APP_BACKEND}/api-standing`)

  return res.data
}

export default getDefaultStandings
