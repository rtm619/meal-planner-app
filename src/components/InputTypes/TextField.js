import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/TextField.style'

const TextField = ({ id, name, type, value, onChange, onBlur, placeholder, label, hasError, errorText, ...others }) => {
  return (
    <div className={styles.wrapper} >
      <label className={styles.label} htmlFor={id} >{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={hasError ? styles.fieldError : styles.field}
        {...others}
      />
      {hasError && <span className={styles.errorText}>{errorText}</span>}
    </div>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
}

TextField.defaultProps = {
  type: 'text',
  onBlur: () => null,
  placeholder: '',
  hasError: false,
  errorText: ''
}

export default TextField
