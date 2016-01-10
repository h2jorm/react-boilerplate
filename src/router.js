import React from 'react';
import {
  Router,
  Route,
  Link,
} from 'react-router';
import browserHistory from './utils/history';
import * as Page from './containers/index';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Page.Todos}></Route>
      </Router>
    );
  }
}
