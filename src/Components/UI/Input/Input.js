import React from 'react';
import classes from './Input.module.css';

const Input = ({type, ph, ...props}) => {
    return (
      <input {...props} className={`g-style-input ${classes.input}`} type={type} placeholder={ph}/>
    );
};

export default Input;