import React from 'react';

const FormInput = ({ input, label, type, placeholder, meta }) => 
  <div className="uk-margin">
    {label && <label className="uk-form-label" htmlFor={input.name}>{label}</label>}
    <div className="uk-form-controls">
      <input 
        className="uk-input"
        {...input}
        type={type}
        placeholder={placeholder} 
      />
      {meta.touched && meta.error && 
        <div className="uk-alert-danger" data-uk-alert>{meta.error}</div>
      }
    </div>
  </div>;

export default FormInput;