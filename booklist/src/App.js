import React from 'react';
import './App.css';
import {data} from './books';
import Book from './Book';


export const App = () => {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  )
}

export default App;
