import React, { Component } from 'react'

import LoaderSVG from '../SVG/Loader'
import styles from './styles/Loader.style'

export default class Loader extends Component {
  componentDidMount = () => {
    document.body.classList.add('overflow-hidden')
  }

  componentWillUnmount = () => {
    document.body.classList.remove('overflow-hidden')
  }

  render() {
    return (
      <>
      <div className={styles.backdrop} />
      <div className={styles.wrapper} >
        <LoaderSVG className={styles.svg} />
      </div>
      </>
    )
  }
}
