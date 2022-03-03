import axios from 'axios'

const signInWithGoogle = async token => {
  const res = await axios.get(`${process.env.APIURL}/login`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res.data
}

export default signInWithGoogle
