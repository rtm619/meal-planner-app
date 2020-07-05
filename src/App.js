import React from 'react';
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './index.generated.css'
import allRoutes from './routes'
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
  }

  render() {
    const { authStore } = this.props
    return (
      <Layout>
        <Switch>
          {allRoutes.map((RouteItem, index) => (
            <Route key={index} path={RouteItem.url}>
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

export default inject('authStore')(observer(App));
