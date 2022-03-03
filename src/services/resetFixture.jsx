import axios from 'axios'

const resetFixture = async (id, token) => {
  const res = await axios.put(
    `https: //champions-league-server.herokuapp.com/fixture/reset/${id}`,
    {},
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )
  return res.data
}

export default resetFixture
