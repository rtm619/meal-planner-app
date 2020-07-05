import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/Button.style'

const Button = ({ className, onClick, disabled, variant, children }) => {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className={`${styles[variant]} ${className}`} >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.any.isRequired,
}

Button.defaultProps = {
  className: '',
  disabled: false,
  variant: 'default'
}

export default Button
