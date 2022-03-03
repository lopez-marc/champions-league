import axios from 'axios'

const putFixture = async (id, data, token) => {
  const res = await axios.put(
    `${process.env.APIURL}/fixture/${id}`,
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
