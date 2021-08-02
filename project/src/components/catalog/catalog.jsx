import React from 'react';
import './catalog.css';
import ProductsList from '../products-list/products-list';


function Catalog() {
  return (
    <div className="catalog-page">
      <div className="catalog-page__wrapper">
        <section className="products">
          <h1 className="products__title">Товары</h1>
          <ProductsList />
        </section>
      </div>
    </div>
  );
}

export default Catalog;
