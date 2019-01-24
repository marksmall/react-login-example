import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from './user-management.actions';

import Login from './login.component';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
