import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Button from '../Button/Button'
import constants from '../../constants'
import styles from './styles/DeleteMeal.style'

class DeleteMeal extends Component {
  static propTypes = {
    handleClose: PropTypes.func.isRequired,
    meal: PropTypes.object.isRequired,
    authStore: PropTypes.object.isRequired,
    mealStore: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleDelete = async () => {
    const { meal, authStore, mealStore, handleClose, history } = this.props
    const responseStatus = await mealStore.delete(meal._id)
    handleClose()
    if (responseStatus === 401) {
      authStore.logout()
      history.replace('/')
    }
  }

  render() {
    const { handleClose } = this.props
    return (
      <div className={styles.wrapper}>
        <div className={styles.text} >{constants.deleteMealWarning}</div>
        <div className={styles.buttonsWrapper}>
          <Button onClick={handleClose} className={styles.noBtn}>{constants.no}</Button>
        </div>
        <div className={styles.buttonsWrapper}>
          <Button onClick={this.handleDelete} className={styles.yesBtn}>{constants.yes}</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('mealStore', 'authStore')(observer(DeleteMeal)))
