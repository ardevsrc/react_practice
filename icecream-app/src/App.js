import React from 'react';
import Menu from './ice-cream/Menu';
import Footer from './structure/Footer';
import Header from './structure/Header';
import './styles/ice-cream.scss';
import EditIceCream from './ice-cream/EditIceCream';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes path="/" component={Menu} exact />
        <Routes path="/menu-items/:menuItemId" component={EditIceCream} />

      <Footer />
    </Router>
  );
}

export default App;
