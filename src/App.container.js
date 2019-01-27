import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser } from './user-management/user-management.selector';
import { logout } from './user-management/user-management.actions';

import App from './App';

const mapStateToProps = state => ({ user: getUser(state) });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout: logout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
