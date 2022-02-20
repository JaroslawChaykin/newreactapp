import React from 'react';
import classes from './Select.module.css'

const Select = ({ options, defoultValue, value, onChange }) => {
    return (
      <select
        className={`g-style-input ${classes.select}`}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
          <option disabled value="">{defoultValue}</option>
          {options.map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>
          )}
      </select>
    );
};


export default Select;