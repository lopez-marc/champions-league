import axios from 'axios'

const getDefaultStandings = async () => {
  const res = await axios.get(`${process.env.APIURL}/api-standing`)

  return res.data
}

export default getDefaultStandings
