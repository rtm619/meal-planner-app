import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/DailyMeals.style'
import Meal from './Meal'
import constants from '../../constants'

const DailyMeals = ({ date, allMeals }) => {
  const parsedDate = new Date(date)
  let totalCalories = 0
  allMeals.forEach(meal => {
    totalCalories += meal.calories
  })
  const isRed = totalCalories > 2000 ? true : false
  return (
    <div className={styles.wrapper} >
      <div className={styles.dateWrapper} >
        <h3 className={styles.date}>
          {`${parsedDate.getDate()}/${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`}
        </h3>
      </div>
  <div className={styles.totalCalories} >{constants.totalCalories}{totalCalories}</div>
      <div className={styles.mealsWrapper} >
        {allMeals.map(meal => (
          <Meal key={meal._id} meal={meal} isRed={isRed} />
        ))}
      </div>
    </div>
  )
}

DailyMeals.propTypes = {
  date: PropTypes.string.isRequired,
  allMeals: PropTypes.array
}

export default DailyMeals
