// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../../components/FormInput';

type Props = {
  submitting: boolean, 
  onSubmit: () => void, 
  handleSubmit: () => void,
}

class LoginForm extends Component {

  props: Props 

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form className="uk-margin-medium-top" onSubmit={handleSubmit(this.handleSubmit)}>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Login</legend>  
          <div className="uk-margin">
            <Field 
              name="username"
              label="Username"
              type="text"
              placeholder="Username"
              component={FormInput} />
          </div>
          <div className="uk-margin">
            <Field 
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              component={FormInput} />
          </div>
          <button
            className="uk-button uk-button-primary uk-button-small"
            type="submit"
            disabled={submitting}
          >{submitting ? 'SIGNING IN...' : 'SIGN IN'}</button>
        </fieldset>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email must be valid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }

  return errors;
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);