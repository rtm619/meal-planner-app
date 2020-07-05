import { observable, action } from 'mobx'
import groupBy from 'lodash.groupby'

import { getAllMeals, addMeal, updateMeal, deleteMeal } from '../service/assessment.service'

class MealStore {
  @observable allMealsByDate = {}

  tokenKey = 'Assessment_API_Token'

  @action async getAll() {
    const token = localStorage.getItem(this.tokenKey)
    const data = await getAllMeals(token)
    if(!data.error) {
      this.allMealsByDate = this.organizeMealsByDate(data.data)
      return data.status
    } else {
      return data.status
    }
  }

  @action async add(mealObject) {
    const token = localStorage.getItem(this.tokenKey)
    const data = await addMeal(token, mealObject)
    if(!data.error) {
      return await this.getAll()
    } else {
      return data.status
    }
  }

  @action async update(id, mealObject) {
    const token = localStorage.getItem(this.tokenKey)
    const data = await updateMeal(token, id, mealObject)
    if(!data.error) {
      return await this.getAll()
    } else {
      return data.status
    }
  }

  @action async delete(id) {
    const token = localStorage.getItem(this.tokenKey)
    const data = await deleteMeal(token, id)
    if(!data.error) {
      return await this.getAll()
    } else {
      return data.status
    }
  }

  organizeMealsByDate = (allMeals = []) => {
    const organizedMeals = groupBy(allMeals, 'date')
    console.log(organizedMeals)
    return organizedMeals
  }
}

export default new MealStore()