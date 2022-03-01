import axios from 'axios'

const getStandings = async token => {
  const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/standing`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })

  return res.data
}

export default getStandings
