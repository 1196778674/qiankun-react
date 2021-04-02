import React, { FC } from 'react';
import { Route, Switch, Link } from "react-router-dom"
import Page from './views/page'

type Props = {};

const App: FC<Props> = (props) => {
  return (
    <>
      sub组件
      <Link to={'/page'}>page</Link>
      <Switch>
        <Route path={'/page'} component={Page} />
      </Switch>
    </>
  )
}

export default App;