import React, { useState } from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrementHandler = () => {
    setCounter(counter + 1);
  }

  return (
    <InteractiveView
     value={counter}
     onAction={onIncrementHandler}
     actionText="+"
     />
  );
};

export default Counter;