import React, {useState} from 'react';
import {data} from './data';

const List = () => {
  const [people, setPeople] = useState(data);

  const handleRemoveItem = (id) => {
    setPeople(people.filter(p => p.id !== id));
  }

  return (
    <>
      {people.map(person => {
        const {id, name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleRemoveItem(id)}>remove</button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>clear items</button>
    </>
  );
}

export default List;