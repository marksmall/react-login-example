import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { validate } from './register.validator';

import style from './register-form.module.css';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        username: '',
        firstname: '',
        surname: '',
        email: '',
        password: ''
      },
      errors: {},
      isFormValid: false
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
    fields.username = '';
    fields.firstname = '';
    fields.surname = '';
    fields.email = '';
    fields.password = '';
    this.setState({ fields: fields }, () => this.validateForm());
  };

  submitForm = event => {
    event.preventDefault();

    this.validateForm();

    if (this.state.isFormValid) {
      let fields = { ...this.state.fields };

      this.props.register(fields);

      // this.reset();
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

  componentDidMount = () => {
    this.validateForm();
  };

  render = () => {
    return (
      <form name="registerForm" onSubmit={this.onSubmit}>
        <h2 className="heading">Register</h2>

        <ul className={style['form-body']}>
          <li>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                maxLength="30"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className={style['error-message']}>
              {this.state.errors.username}
            </div>
          </li>
          <li>
            <div>
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                maxLength="30"
                value={this.state.fields.firstname}
                onChange={this.handleChange}
              />
            </div>
            <div className={style['error-message']}>
              {this.state.errors.firstname}
            </div>
          </li>
          <li>
            <div>
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                maxLength="30"
                value={this.state.fields.surname}
                onChange={this.handleChange}
              />
            </div>
            <div className={style['error-message']}>
              {this.state.errors.surname}
            </div>
          </li>
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
              >
                Register
              </button>
            </div>
          </li>
        </ul>
        <p>
          Already have an account? <Link to={'/login'}>Log in</Link>
        </p>
      </form>
    );
  };
}

export default RegisterForm;
