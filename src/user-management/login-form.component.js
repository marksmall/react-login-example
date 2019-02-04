import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { validate } from './login.validator';

import style from './login-form.module.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {},
      isFormValid: false,
      redirectToReferrer: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    // Set the current state, then validate form, setState is a kind
    // of promise, hence the need for a callback function.
    this.setState(
      previousState => {
        const fields = { ...previousState.fields, [name]: value };
        return { fields };
      },
      () => this.validateForm()
    );
  };

  reset = () => {
    const fields = { ...this.state.fields };
    fields.email = '';
    fields.password = '';
    this.setState({ fields: fields }, () => this.validateForm());
  };

  submitForm = event => {
    event.preventDefault();

    this.validateForm();

    if (this.state.isFormValid) {
      let fields = { ...this.state.fields };

      this.props.login(fields, () => {
        this.setState({ redirectToReferrer: true });
      });
    }
  };

  validateForm = () => {
    const fields = { ...this.state.fields };
    let errors = {};

    errors = validate(fields);
    Object.keys(errors).length === 0
      ? this.setState({ isFormValid: true })
      : this.setState({ isFormValid: false });

    this.setState({
      errors
    });
  };

  // componentDidMount = () => {
  //   this.validateForm();
  // };

  render = () => {
    const { from } = this.props.location.state || {
      from: { pathname: '/' }
    };
    const { redirectToReferrer } = this.state;
    // console.log('PROPS: ', from, redirectToReferrer, this.props);

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <h2 className="heading">Login</h2>

        <ul className={style['form-body']}>
          <li>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                value={this.state.fields.email}
                onChange={this.handleChange}
                data-cy="email"
              />
            </div>
            <div className={style['error-message']}>
              {this.state.errors.email}
            </div>
          </li>
          <li>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={this.state.fields.password}
                onChange={this.handleChange}
                data-cy="password"
              />
            </div>
            <div className={style['error-message']}>
              {this.state.errors.password}
            </div>
          </li>
          <li>
            <div className={style.buttons}>
              <button onClick={this.reset} className={style['reset-btn']}>
                Reset
              </button>
              <button
                type="submit"
                onClick={this.submitForm}
                className={style['submit-btn']}
                disabled={!this.state.isFormValid}
                data-cy="submit"
              >
                Login
              </button>
            </div>
          </li>
        </ul>
        <p>
          Don't have an account?{' '}
          <Link to={'/register'} data-cy="register">
            Create one
          </Link>
          .
        </p>
      </form>
    );
  };
}

export default LoginForm;
