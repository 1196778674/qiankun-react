import React, { FC } from 'react';
import Layout from './layout'
import { Route, Switch } from "react-router-dom"

import Page from './views/page'

import { registerMicroApps, start } from 'qiankun';


const App: FC = (props) => {
    return (
        <Layout>
            Home
            <Switch>
                <Route path="/page" component={Page} />
            </Switch>
        </Layout>
    )
}


registerMicroApps([
  {
    name: 'qiankun-app',
    entry: '//localhost:3002',
    container: '#rootApp',
    activeRule: '/qiankun',
  }
]);

start();

export default App;