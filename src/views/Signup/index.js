import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/modules/Auth/actions';
import SignupForm from './SignupForm';

class Signup extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  handleSignup = data => this.props.signup({ user: data }, this.context.router);

  render() {
    return (
      <div className="uk-flex uk-flex-center">
        <div className="uk-text-center">
          <SignupForm onSubmit={this.handleSignup} />
          <p>Already have an account?</p>
          <NavLink to="/login">Login here</NavLink>
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
