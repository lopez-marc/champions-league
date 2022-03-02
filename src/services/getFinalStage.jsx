import axios from 'axios'

const getFinalStage = async token => {
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/final-stage`,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )

  return res.data
}

export default getFinalStage
