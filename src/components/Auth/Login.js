import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Schema from './Login.schema'
import styles from './styles/Login.style'
import constants from '../../constants'
import TextField from '../InputTypes/TextField'
import Button from '../Button/Button'

class Login extends Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {}
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
    const { authStore, history } = this.props
    const errors = []
    Object.keys(Schema).forEach(fieldId => {
      if (!this.validateField(this.state[fieldId], Schema[fieldId].validation)) {
        errors.push(true)
      }
    })
    if (errors.length === 0) {
      const res = await authStore.login({ email: this.state.email, password: this.state.password })
      if (res) {
        history.push('/meals')
      }
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.introText}>
          {constants.loginIntroText}
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
            {constants.authLoginBtn}
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('authStore')(observer(Login)))
