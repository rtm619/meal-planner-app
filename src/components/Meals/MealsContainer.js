import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import styles from './styles/MealsContainer.style'
import DailyMeals from './DailyMeals'
import Plus from '../SVG/Plus'
import Dialog from '../Dialog/Dialog'
import constants from '../../constants'
import AddMeal from './AddMeal'

class MealsContainer extends Component {
  static propTypes = {
    mealStore: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    authStore: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      addDialogState: false,
    }
  }

  componentDidMount = async () => {
    const { mealStore, authStore, history } = this.props
    const responseStatus = await mealStore.getAll()
    if (responseStatus === 401) {
      authStore.logout()
      history.replace('/')
    }
  }

  handleAddDialogOpen = () => {
    this.setState({
      addDialogState: true
    })
  }

  handleAddDialogClose = () => {
    this.setState({
      addDialogState: false
    })
  }

  render() {
    const { mealStore } = this.props
    const { addDialogState } = this.state
    return (
      <div className={styles.wrapper} >
        {Object.keys(mealStore.allMealsByDate).map(date => {
          const groupedMeals = mealStore.allMealsByDate[date]
          return (
            <DailyMeals key={date} date={date} allMeals={groupedMeals} />
          )
        })}
        <div className={styles.addButtonWrapper}>
          <button type="button" onClick={this.handleAddDialogOpen} className={styles.addBtn}>
            <Plus className={styles.addIcon} />
          </button>
        </div>
        {addDialogState && (
          <Dialog headerText={constants.addMeal} handleClose={this.handleAddDialogClose} >
            <AddMeal handleClose={this.handleAddDialogClose} />
          </Dialog>
        )}
      </div>
    )
  }
}

export default withRouter(inject('mealStore', 'authStore')(observer(MealsContainer)))
