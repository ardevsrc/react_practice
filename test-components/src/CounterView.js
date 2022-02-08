import React from 'react'

const CounterView = ({counterValue, onIncrement}) => (
   <>
    <p>{counterValue}</p>
    <button type="button" onClick={onIncrement}>
      Increment
    </button>
   </>
);

export default CounterView;