import React from 'react';
import s from './Form.module.css';
// import { useState } from 'react';
import './index.css';



export function validate (input) {
  let errors = {}
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) errors.password = 'Password is required'
  else if (!/(?=.*[0-9])/.test(input.password)) errors.password = 'Password is invalid'

  return errors;
};


export default function  Form() {
  const [input, setInput] = React.useState({
    username:'',
    password:''
  })
const [errors,setErrors] = React.useState ({});

  const handleInputChange = function(e) {
    // e.preventDefault ();
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));     
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

  }

  return (
      <form >
        <div>
          <label>Username:</label>
          <input 
            type='text'
            className={errors.username ? `danger ${s.input}` : s.input} 
            placeholder='example@gmail.com' 
            name='username'
            onChange={handleInputChange}
            value={input.username}
             />
            {errors.username && (
              <p className="danger">{errors.username}</p>
            )}
        </div>
        <div>
          <label>Password:</label>
          <input 
            type='password' 
            name='password'
            value={input.password}
            onChange={handleInputChange}
            className={errors.password && 'danger'}/>
            {errors.password && (
              <p className="danger">{errors.password}</p>
            )}
        </div>
        <input type='submit' className={s.submit}/>
      </form>
  )
}
