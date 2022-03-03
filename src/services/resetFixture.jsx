import axios from 'axios'

const resetFixture = async (id, token) => {
  const res = await axios.put(
    `${process.env.APIURL}/fixture/reset/${id}`,
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
