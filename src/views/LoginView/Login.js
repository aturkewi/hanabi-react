// @flow 
import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/modules/Auth/actions';
import LoginForm from './LoginForm';

type Props = {
  login: () => void,
}

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogin = data => this.props.login({ user: data }, this.context.router);

  render() {
    return (
      <div className="uk-flex uk-flex-center">
        <div className="uk-text-center">
          <LoginForm onSubmit={this.handleLogin} />
          <p>Don't have an account?</p>
          <NavLink to="/signup">Create new account</NavLink>
        </div>
      </div>
    )
  }
}

export default connect(null, { login })(Login);