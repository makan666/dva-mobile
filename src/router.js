import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Tabs from './routes/Tabs/Tabs';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Tabs} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
