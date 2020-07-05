import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import Schema from './UpdateMeal.schema'
import Button from '../Button/Button'
import constants from '../../constants'
import styles from './styles/UpdateMeal.style'
import TextField from '../InputTypes/TextField'

class UpdateMeal extends Component {
  static propTypes = {
    mealStore: PropTypes.object.isRequired,
    authStore: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    meal: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.state = {}
    Object.keys(Schema).forEach(item => {
      if (Schema[item].type === 'date') {
        this.state[item] = props.meal[item].substring(0, 10)
      } else {
        this.state[item] = props.meal[item]
        this.state[item + 'Error'] = false
      }
    })
  }

  handleChange = (event) => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  handleBlur = (event) => {
    const { id, value } = event.target
    const regexp = Schema[id].validation
    this.setState({
      [id + 'Error']: !this.validateField(value, regexp)
    })
  }

  validateField = (value, regexp) => {
    console.log(regexp, value, regexp.test(value))
    return regexp.test(value)
  }

  handleSubmit = async () => {
    const { mealStore, authStore, handleClose, history, meal } = this.props
    const errors = []
    Object.keys(Schema).forEach(fieldId => {
      if (Schema[fieldId].type !== 'date' && !this.validateField(this.state[fieldId], Schema[fieldId].validation)) {
        errors.push(true)
      }
    })
    if (errors.length === 0) {
      const date = new Date(this.state.date)
      const responseStatus = await mealStore.update(meal._id, { name: this.state.name, date: date.toJSON(), calories: this.state.calories })
      handleClose()
      if (responseStatus === 401) {
        authStore.logout()
        history.replace('/')
      }
    }
  }

  render() {
    const currentDate = new Date()
    return (
      <div className={styles.wrapper}>
        {Object.keys(Schema).map(fieldId => {
          switch (Schema[fieldId].type) {
            case 'date': return (
              <div key={fieldId} className={styles.fieldWrapper} >
                <TextField
                  id={fieldId}
                  name={Schema[fieldId].name}
                  type={Schema[fieldId].type}
                  onChange={this.handleChange}
                  min='2020-01-01'
                  max={currentDate.toJSON().substring(0, 10)}
                  value={this.state[fieldId]}
                  label={Schema[fieldId].label}
                  placeholder={Schema[fieldId].placeholder}
                />
              </div>
            )
            default: return (
              <div key={fieldId} className={styles.fieldWrapper} >
                <TextField
                  id={fieldId}
                  name={Schema[fieldId].name}
                  type={Schema[fieldId].type}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={this.state[fieldId]}
                  hasError={this.state[fieldId + 'Error']}
                  errorText={Schema[fieldId].errorText}
                  label={Schema[fieldId].label}
                  placeholder={Schema[fieldId].placeholder}
                />
              </div>
            )
          }
        })}
        <div className={styles.fieldWrapper} >
          <Button onClick={this.handleSubmit} variant='default' className={styles.btn} >
            {constants.update}
          </Button>
        </div>
      </div>
    )
  }
}

export default inject('mealStore', 'authStore')(observer(UpdateMeal))
