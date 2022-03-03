import axios from 'axios'

const getDefaultStandings = async () => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/api-standing`
  )

  return res.data
}

export default getDefaultStandings
