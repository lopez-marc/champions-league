import axios from 'axios'

const getStandings = async token => {
  const res = await axios.get(`${process.env.APIURL}/standing`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })

  return res.data
}

export default getStandings
