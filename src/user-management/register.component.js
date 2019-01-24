import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './register-form.component';

import style from './register.module.css';

const Register = ({ register }) => (
  <div className={style['register-container']}>
    <RegisterForm register={register} />
  </div>
);

Register.propTypes = {
  register: PropTypes.func.isRequired
};

export default Register;
