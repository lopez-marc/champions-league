import axios from 'axios'

const getFixtures = async token => {
  const res = await axios.get(`${process.env.REACT_APP_BACKEND}/fixture`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })

  return res.data
}

export default getFixtures
