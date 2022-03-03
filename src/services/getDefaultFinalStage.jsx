import axios from 'axios'

const getDefaultFinalStage = async () => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/api-final-stage`
  )

  return res.data
}

export default getDefaultFinalStage
