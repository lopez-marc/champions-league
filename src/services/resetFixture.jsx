import axios from 'axios'

const resetFixture = async (id, token) => {
  const res = await axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/fixture/reset/${id}`,
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
