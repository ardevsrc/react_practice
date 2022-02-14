import React, {useState, useEffect} from 'react';
import {getMenu} from '../data/iceCreamData';
import Helmet from 'react-helmet';
import IceCreamImage from './IceCreamImage';
import LoaderMessage from '../structure/LoaderMessage';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getMenu().then(menuData => {
      if (isMounted) {
        setMenu(menuData);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    }
  }, []);


  return (
    <main>
      <Helmet>
        <title>Rock your taste buds with one of these! | Ultimate Ice Cream</title>
      </Helmet>
      <h2 className="main-heading">Rock your taste buds with one of these!</h2>
      <LoaderMessage
        loadingMessage="Loading menu..."
        isLoading={isLoading} />
      {menu.length > 0 ? 
      (<ul className="container">
        {menu.map(({id, iceCream, price, description, inStock, quantity}) => 
        <li key={id.toString()}>
          <section className="card">
            <div className="image-container">
              <IceCreamImage iceCreamId={iceCream.id} />
            </div>
            <div className="text-container">
              <h3>{iceCream.name}</h3>
              <div className="content card-content">
                <p className="price">{`$${price.toFixed(2)}`}</p>
                <p className={`stock${inStock ? '' : ' out'}`}>
                  {inStock ? `${quantity} in stock`: `Currently out of stock`}
                </p>
                <p className ="description">{description}</p>
              </div>
            </div>
          </section>
        </li>
        )}
      </ul>) : (
        !isLoading && <p> Your menu is empty! the sadness!!!</p>)
      }
    </main>
  )
};

export default Menu;