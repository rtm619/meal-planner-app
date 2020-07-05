import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import Schema from './Register.schema'
import styles from './styles/Register.style'
import constants from '../../constants'
import TextField from '../InputTypes/TextField'
import Button from '../Button/Button'
import Dialog from '../Dialog/Dialog'

class Register extends Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      successDialogState: false,
    }
    Object.keys(Schema).forEach(item => {
      this.state[item] = ''
      this.state[item + 'Error'] = false
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
    const { authStore } = this.props
    const errors = []
    Object.keys(Schema).forEach(fieldId => {
      if (!this.validateField(this.state[fieldId], Schema[fieldId].validation)) {
        errors.push(true)
      }
    })
    if (errors.length === 0) {
      const res = await authStore.register({
        displayName: this.state.displayName,
        email: this.state.email,
        password: this.state.password,
      })
      if (res) {
        this.setState({
          successDialogState: true
        })
      }
    }
  }

  handleDialogClose = () => {
    this.setState({
      successDialogState: false
    })
  }
  render() {
    const { successDialogState } = this.state
    return (
      <>
        <div className={styles.wrapper}>
          <h3 className={styles.introText}>
            {constants.registerIntroText}
          </h3>
          {Object.keys(Schema).map(fieldId => (
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
          ))}
          <div className={styles.fieldWrapper} >
            <Button onClick={this.handleSubmit} variant='default' className={styles.btn} >
              {constants.authRegisterBtn}
            </Button>
          </div>
        </div>
        {successDialogState && (
          <Dialog
            headerText={constants.congratulations}
            handleClose={this.handleDialogClose}
          >
            <div className={styles.successDialogWrapper} >
              <span className={styles.successText} >
                {constants.registerSuccess}
              </span>
            </div>
            </Dialog>
        )}
      </>
    )
  }
}

export default inject('authStore')(observer(Register))
