import axios from 'axios'

const getFixtures = async token => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/fixture`,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )

  return res.data
}

export default getFixtures
