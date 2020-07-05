import { observable, action } from 'mobx'

import { authGetUser, authLogin, authRegister } from '../service/assessment.service'

class AuthStore {
  @observable user = null

  @observable isLoggedIn = false

  @observable authToken = ''

  @observable isLoading = false

  tokenKey = 'Assessment_API_Token'

  @action async init() {
    const token = localStorage.getItem(this.tokenKey)
    if(token) {
      this.isLoading = true
      const data = await authGetUser(token)
      this.isLoading = false
      if(!data.error) {
        this.user = data.data
        this.isLoggedIn = true
        this.authToken = token
        return true
      } else {
        localStorage.removeItem(this.tokenKey)
        return false
      }
    }
  }

  @action async login({ email = '', password = '' }) {
    this.isLoading = true
    const data = await authLogin(email, password)
    this.isLoading = false
    if(!data.error) {
      this.user = data.data.user
      this.isLoggedIn = true
      this.authToken = data.data.auth_token
      localStorage.setItem(this.tokenKey, this.authToken)
      return true
    }
    return false
  }

  @action async register({ displayName = '', email = '', password = '' }) {
    this.isLoading = true
    const data = await authRegister(displayName, email, password)
    this.isLoading = false
    if(!data.error) {
      return true
    }
    return false
  }

  @action logout() {
    localStorage.removeItem(this.tokenKey)
    this.resetStore()
  }

  @action resetStore() {
    this.user = null
    this.isLoggedIn = false
    this.authToken = ''
    this.isLoading = false

  }
 }

export default new AuthStore