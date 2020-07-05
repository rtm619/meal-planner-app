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

export const getAllMeals = async (token) => {
  const { data } = await Axios.get(`${domainUrl}/meals/get-all`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return data
}

export const addMeal = async (token, mealObject) => {
  const { data } = await Axios.post(`${domainUrl}/meals/add`, mealObject, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return data
}

export const updateMeal = async (token, mealId, mealObject) => {
  const { data } = await Axios.put(`${domainUrl}/meals/update/${mealId}`, mealObject, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return data
}

export const deleteMeal = async (token, mealId) => {
  const { data } = await Axios.delete(`${domainUrl}/meals/delete/${mealId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return data
}
