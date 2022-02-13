import React from 'react';
import Menu from './ice-cream/Menu';
import Footer from './structure/Footer';
import Header from './structure/Header';
import './styles/ice-cream.scss';

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Footer />    
    </>
  );
}

export default App;
