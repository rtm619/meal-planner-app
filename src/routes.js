import { lazy } from 'react'

const Authentication = lazy(() => import('./templates/Authentication.template'))
const Meals = lazy(() => import('./templates/Meals.template'))

export default [
  { url: '/', Component: Authentication, isGuarded: false, exact: true },
  { url: '/meals', Component: Meals, isGuarded: true, exact: true },
]