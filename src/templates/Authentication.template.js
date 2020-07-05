import React, { Component } from 'react'
import Helmet from 'react-helmet'

import styles from './styles/Authentication.style'
import constants from '../constants'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

class Authentication extends Component {
  render() {
    return (
      <>
      <Helmet>
        <title>Meal Planner - Login</title>
      </Helmet>
      <div className={styles.wrapper} >
        <div className={styles.introWrapper} >
          <h2 className={styles.introText} >
            {constants.authIntroText}
          </h2>
        </div>
        <div className={styles.loginWrapper}>
          <Login />
        </div>
        <div className={styles.registerWrapper} >
          <Register />
        </div>
      </div>
      </>
    )
  }
}

export default Authentication