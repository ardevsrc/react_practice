import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);


  return (
    <section className="section-center">
      <h3>lorem ipsum builder</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          value={count} 
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>

    </section>
  );
}

export default App;
