import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles/Dialog.style'
import Close from '../SVG/Close'

export default class Dialog extends Component {
  static propTypes = {
    headerText: PropTypes.string,
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

  componentDidMount = () => {
    document.body.classList.add('overflow-hidden')
  }

  componentWillUnmount = () => {
    document.body.classList.remove('overflow-hidden')
  }

  render() {
    const { headerText, handleClose, children } = this.props
    return (
      <>
        <div className={styles.backdrop} />
        <div className={styles.wrapper} >
          <div className={styles.container} >
            <div className={styles.header}>
              <span className={styles.headerText} >
                {headerText}
              </span>
              <button type="button" className={styles.closeBtn} onClick={handleClose}>
                <Close className={styles.closeIcon} />
              </button>
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </>
    )
  }
}
