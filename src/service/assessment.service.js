import Axios from 'axios'

const domainUrl = process.env.REACT_APP_ASSESSMENT_API

export const authGetUser = async (token) => {
  const { data } = await Axios.get(`${domainUrl}/auth/get-user`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return data
}

export const authLogin = async (email, password) => {
  const { data } = await Axios.post(`${domainUrl}/auth/sign-in`, {
    username: email,
    password,
  })
  return data
}

export const authRegister = async (displayName, email, password) => {
  const { data } = await Axios.post(`${domainUrl}/auth/sign-up`, {
    displayName,
    email,
    password,
  })
  return data
}
