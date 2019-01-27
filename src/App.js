import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import PrivateRoute from './utils/private-route.component';

import Login from './user-management/login.container';
import Logout from './user-management/logout.component';
import Register from './user-management/register.container';

import './App.css';

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
const Validate = () => <h3>Validate</h3>;
class App extends Component {
  render() {
    console.log('APP PROPS: ', this.props);
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
          {this.props.user && (
            <button onClick={() => this.props.logout(this.props.history)}>
              Logout
            </button>
          )}
        </header>
        <Switch>
          <Route path="/public" component={Public} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/validate" component={Validate} />
          <PrivateRoute
            exact
            path="/protected"
            user={this.props.user}
            component={Protected}
          />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
