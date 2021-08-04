import React from 'react';
import './catalog.css';
import ProductsList from '../products-list/products-list';


function Catalog() {
  return (
    <div className="catalog-page">
      <div className="catalog-page__wrapper">
        <h1 className="catalog-page__title">Товары</h1>
        <section className="products">
          <h2 className="visually-hidden">Список товаров</h2>
          <ProductsList />
        </section>
      </div>
    </div>
  );
}


export default Catalog;
