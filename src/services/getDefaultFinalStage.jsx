import axios from 'axios'

const getDefaultFinalStage = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api-final-stage`
  )

  return res.data
}

export default getDefaultFinalStage
