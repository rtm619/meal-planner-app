export default {
  name: {
    type: 'text',
    name: 'meal-name',
    label: 'Please enter the Meal name',
    validation: /^[\w\s]+$/,
    errorText: 'Please enter a valid name',
    placeholder: '',
  },
  calories: {
    type: 'number',
    name: 'meal-calories',
    label: 'Please enter the calories consumed',
    validation: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
    errorText: 'Calories must be in the range of 1 - 999',
    placeholder: '',
  },
  date: {
    type: 'date',
    name: 'meal-date',
    label: 'Please enter the date of intake',
    validation: null,
    errorText: '',
    placeholder: '',
  }
}