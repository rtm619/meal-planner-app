import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider as MobxProvider, observer, inject } from 'mobx-react'
import Helmet from 'react-helmet'

import mealStore from '../stores/Meal.store'
import styles from './styles/Meals.style'
import MealsContainer from '../components/Meals/MealsContainer'

class Meals extends Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired
  }

  render() {
    const { authStore } = this.props
    return (
      <>
        <Helmet>
          <title>Meal Planner - Meals</title>
        </Helmet>
        <MobxProvider mealStore={mealStore}>
          <div className={styles.wrapper}>
            <div className={styles.greetingsWrapper}>
              <h2 className={styles.greeting}>
                {`Hi ${authStore.user.displayName}!`}
              </h2>
            </div>
            <MealsContainer />
          </div>
        </MobxProvider>
      </>
    )
  }
}

export default inject('authStore')(observer(Meals))