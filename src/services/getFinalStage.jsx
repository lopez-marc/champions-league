import axios from 'axios'

const getFinalStage = async token => {
  const res = await axios.get(`${process.env.APIURL_URL}/final-stage`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })

  return res.data
}

export default getFinalStage
