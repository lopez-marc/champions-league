import axios from 'axios'

const getFinalStage = async token => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/final-stage`,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )

  return res.data
}

export default getFinalStage
