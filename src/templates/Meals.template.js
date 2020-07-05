import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles/Meals.style'

export default class Meals extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <div className={styles.wrapper} >
        Welcome to meals
      </div>
    )
  }
}
