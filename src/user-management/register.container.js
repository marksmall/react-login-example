import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { register } from './user-management.actions';

import Register from './register.component';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      register
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
