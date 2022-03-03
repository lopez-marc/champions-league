import axios from 'axios'

const signInWithGoogle = async token => {
  const res = await axios.get(
    `https://champions-league-server.herokuapp.com/login`,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )
  return res.data
}

export default signInWithGoogle
