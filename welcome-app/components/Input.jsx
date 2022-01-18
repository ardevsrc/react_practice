import React, { useState } from 'react';

export default props => {
  const [name, setName] = useState('');

  return (
    <>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={() => props.handleChange(name)}>Update name</button>
    </>
  );
}