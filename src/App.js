import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import PrivateRoute from './utils/private-route.component';

import Login from './user-management/login.container';
import Register from './user-management/register.container';

import './App.css';

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <button onClick={this.props.logout}>Logout</button>
        </header>
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            path="/protected"
            user={this.props.user}
            component={Protected}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
