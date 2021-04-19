import React, { FC } from 'react';
import Layout from './layout'
import { Route, Switch } from "react-router-dom"

import Page from './views/page'

import { registerMicroApps, start } from 'qiankun';

const AppContainer: FC = () => {
  return (
    <div id="app">HOME</div>
  )
}

const App: FC = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path="/page" component={Page} />
                <Route path="/">
                  <AppContainer />
                </Route>
            </Switch>
        </Layout>
    )
}


registerMicroApps([
  {
    name: 'qiankun-app',
    entry: '//localhost:3002',
    container: '#app',
    activeRule: '/qiankun',
  }
]);

start();

export default App;