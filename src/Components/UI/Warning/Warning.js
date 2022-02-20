import React from 'react';
import classes from './Warning.module.css'

const Warning = ({ className, text }) => {
    return (
      <div className={`${classes[className]} ${classes.center}`}>{text}</div>
    );
};

export default Warning;