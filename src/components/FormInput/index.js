import React from 'react';

const FormInput = ({ input, label, type, placeholder, meta }) => 
  <div>
    {label && <label htmlFor={input.name}>{label}</label>}
    <input 
      {...input}
      type={type}
      placeholder={placeholder} 
    />
    {meta.touched && meta.error && 
      <div>{meta.error}</div>
    }
  </div>;

export default FormInput;