import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles/Meal.style'
import Pencil from '../SVG/Pencil'
import Trash from '../SVG/Trash'
import Dialog from '../Dialog/Dialog'
import constants from '../../constants'
import DeleteMeal from './DeleteMeal'
import UpdateMeal from './UpdateMeal'

class Meal extends Component {
  static propTypes = {
    meal: PropTypes.object.isRequired,
    isRed: PropTypes.bool,
  }

  static defaultProps = {
    isRed: false
  }

  constructor(props) {
    super(props)
    this.state = {
      editDialogState: false,
      deleteDialogState: false,
    }
  }

  handleEditDialogOpen = () => {
    this.setState({
      editDialogState: true,
    })
  }

  handleEditDialogClose = () => {
    this.setState({
      editDialogState: false
    })
  }

  handleDeleteDialogOpen = () => {
    this.setState({
      deleteDialogState: true,
    })
  }

  handleDeleteDialogClose = () => {
    this.setState({
      deleteDialogState: false
    })
  }

  render() {
    const { isRed, meal } = this.props
    const { editDialogState, deleteDialogState } = this.state
    const borderClass = isRed ? 'border-darkred' : 'border-darkgreen'
    return (
      <>
        <div className={`${styles.wrapper} ${borderClass}`}>
          <div className={styles.actionsWrapper}>
            <button type="button" onClick={this.handleEditDialogOpen} className={styles.actionButtons} >
              <Pencil className={styles.editIcon} />
            </button>
            <button type="button" onClick={this.handleDeleteDialogOpen} className={styles.actionButtons} >
              <Trash className={styles.deleteIcon} />
            </button>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.name}>{meal.name}</div>
            <div className={styles.calories}>{`${constants.calorie} ${meal.calories}`}</div>
          </div>
        </div>
        {deleteDialogState && (
          <Dialog headerText={constants.deleteMeal + meal.name} handleClose={this.handleDeleteDialogClose}>
            <DeleteMeal handleClose={this.handleDeleteDialogClose} meal={meal} />
          </Dialog>
        )}
        {editDialogState && (
          <Dialog headerText={constants.updateMeal} handleClose={this.handleEditDialogClose}>
            <UpdateMeal meal={meal} handleClose={this.handleEditDialogClose} />
          </Dialog>
        )}
      </>
    )
  }
}

export default Meal
