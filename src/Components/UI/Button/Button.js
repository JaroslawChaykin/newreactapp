import React from 'react';
import classes from './Button.module.css'

const Button = ({cb, title, disabled}) => {
    return (
      <button className={classes.button} type="button" onClick={cb} disabled={disabled}>{title}</button>
    );
};

export default Button;