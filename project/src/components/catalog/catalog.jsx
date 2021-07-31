import React from 'react';
import './catalog.css';
import ProductCard from '../products/product-card';
import {createMockOffers} from '../../mock/mock-offers';


const mockOffers = createMockOffers();


// console.log(mockOffers);
function Catalog() {
  return (
    <div className="catalog-page">
      <section className="products">
        <h1 className="products__title">Товары</h1>
        <ul className="products__list">
          {
            mockOffers.map((offer, index) => (
              <ProductCard
                key={index.toString()}
                offer={offer}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Catalog;
