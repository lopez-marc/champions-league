import axios from 'axios'

const putFixture = async (id, data, token) => {
  const res = await axios.put(
    `https://champions-league-server.herokuapp.com/fixture/${id}`,
    { data: JSON.parse(data) },
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )

  return res.data
}

export default putFixture
