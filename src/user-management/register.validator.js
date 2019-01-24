export const validate = fields => {
  const errors = {};

  if (typeof fields.email !== 'undefined') {
    if (!fields.email.match(/^[a-zA-Z]+$/)) {
      errors.email = 'Email must only contain alphabetic characters only.';
    }
  }

  if (!fields.email) {
    errors.email = 'Please enter a valid email.';
  }

  if (!fields.password) {
    errors.email = 'Please enter a password.';
  }

  if (fields.password && fields.password.length < 1) {
    errors.password = 'Please select 2 or more of the available models.';
  }

  return errors;
};
