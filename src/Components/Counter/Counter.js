import React, { useState } from 'react';
import './Counter.css'

const Counter = props => {

    const [count, setCount] = useState(0);

    return (
      <div className={'counter'}>
          <div className="main">
              <button onClick={() => {
                  setCount(count + 1);
              }}>+
              </button>
              <h1>{count}</h1>
              <button onClick={() => {
                  setCount(count - 1);
              }}>-
              </button>
          </div>
      </div>
    );
};

export default Counter;