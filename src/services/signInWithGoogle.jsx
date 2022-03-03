import axios from 'axios'

const signInWithGoogle = async token => {
  const res = await axios.get(`${process.env.REACT_APP_BACKEND}/login`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res.data
}

export default signInWithGoogle
