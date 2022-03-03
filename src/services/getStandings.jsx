import axios from 'axios'

const getStandings = async token => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/standing`,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )

  return res.data
}

export default getStandings
