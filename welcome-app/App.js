import React, { useState } from 'react';
import './styles.css';

import Title from './components/Title';
import Greeting from './components/Greeting';
import Input from './components/Input';

const App = props => {
  const [displayName, setDisplayName] = useState();

    return (
      <>
        <Title title="Welcome to the app" />
        <Greeting name={displayName} />
        <p>Enter your name below so we can get better acquainted</p>
        <Input handleClick={name => setDisplayName(name)} />
      </>
    );
}

export default App;