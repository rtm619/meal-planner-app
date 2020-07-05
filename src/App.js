import React from 'react';
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import './index.generated.css'
import allRoutes from './routes'
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount = async () => {
    const { authStore, history } = this.props
    const response = await authStore.init()
    if(response){
      history.push('/meals')
    }
  }

  render() {
    const { authStore } = this.props
    return (
      <Layout>
        <Switch>
          {allRoutes.map((RouteItem, index) => (
            <Route key={index} exact={RouteItem.exact} path={RouteItem.url}>
              {(RouteItem.isGuarded && authStore.isLoggedIn) ? (
                <React.Suspense fallback={<Loader />} >
                  <RouteItem.Component />
                </React.Suspense>
              ) :
                <Redirect to="/" />
              }
              {!RouteItem.isGuarded && (
                <React.Suspense fallback={<Loader />} >
                  <RouteItem.Component />
                </React.Suspense>
              )}
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(inject('authStore')(observer(App)))
