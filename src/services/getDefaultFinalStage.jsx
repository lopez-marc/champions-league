import axios from 'axios'

const getDefaultFinalStage = async () => {
  const res = await axios.get(`${process.env.APIURL}/api-final-stage`)

  return res.data
}

export default getDefaultFinalStage
