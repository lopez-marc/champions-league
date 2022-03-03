import axios from 'axios'

const getFixtures = async token => {
  const res = await axios.get(`${process.env.APIURL}/fixture`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })

  return res.data
}

export default getFixtures
