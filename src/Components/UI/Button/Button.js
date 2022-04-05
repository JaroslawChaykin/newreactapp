import React from 'react';
import classes from './Button.module.css'

const Button = ({cb, title, disabled}) => {
    return (
      <button className={`g-style-input ${classes.button}`} type="submit" onClick={cb} disabled={disabled}>{title}</button>
    );
};

export default Button;