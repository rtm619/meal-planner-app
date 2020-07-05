import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import constants from '../../constants'
import BrandLogo from '../SVG/BrandLogo'
import styles from './styles/Layout.style'

class Layout extends Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  }

  handleLogout = () => {
    const { authStore } = this.props
    authStore.logout()
  }

  render() {
    const { authStore, children } = this.props
    return (
      <>
        <header className={styles.headerWrapper}>
          <div className={styles.logoWrapper}>
            <BrandLogo className={styles.logo} />
          </div>
          <div className={styles.textWrapper} >
            <h1 className={styles.text} >
              {constants.headerText}
            </h1>
          </div>
          <div className={styles.authWrapper} >
            {authStore.isLoggedIn && (
              <button onClick={this.handleLogout} className={styles.logoutBtn} >
                {constants.logout}
              </button>
            )}
          </div>
        </header>
        {children}
        <footer className={styles.footerWrapper} />
      </>
    )
  }
}

export default inject('authStore')(observer(Layout))
