import axios from 'axios'

const getDefaultStandings = async () => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/api-fixture`
  )

  return res.data
}

export default getDefaultStandings
