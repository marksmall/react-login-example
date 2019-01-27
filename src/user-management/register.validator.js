export const validate = fields => {
  const errors = {};

  if (typeof fields.email !== 'undefined') {
    if (
      !fields.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errors.email = 'Email must be valid: ' + fields.email;
    }
  }

  if (!fields.email) {
    errors.email = 'Please enter a valid email.';
  }

  if (!fields.password) {
    errors.email = 'Please enter a password.';
  }

  if (fields.password && fields.password.length < 1) {
    errors.password = 'Password too short.';
  }

  return errors;
};
