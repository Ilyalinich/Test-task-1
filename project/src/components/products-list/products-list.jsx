import React, {useState, useEffect} from 'react';
import './products-list.css';
import ProductCard from '../product-card/product-card';
import {createMockOffers} from '../../mock/mock-offers';
import LoadingSpinner from '../loading-spinner/loading-spinner';

const FAKE_LOADING_TIME = 500;

const fetchProducts = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(createMockOffers());
  }, FAKE_LOADING_TIME);
});


function ProductsList() {
  const [state, setState] = useState({
    products: [],
    isProductsLoading: false,
  });

  const {products, isProductsLoading} = state;

  const loadProducts = () => {
    setState((prevState) => ({
      ...prevState,
      isProductsLoading: true,
    }));

    fetchProducts()
      .then((data) => setState((prevState) => ({
        products: [...prevState.products, ...data],
        isProductsLoading: false,
      })));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const checkPosition = () => {
      const documentHeight = document.body.offsetHeight;
      const screenHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const threshold = documentHeight - screenHeight / 4;
      const position = scrolled + screenHeight;

      if (position >= threshold) {
        loadProducts();
      }
    };

    isProductsLoading || window.addEventListener('scroll', checkPosition);
    isProductsLoading || window.addEventListener('resize', checkPosition);


    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [isProductsLoading]);

  return (
    <ul className="products__list">
      {
        products.map((offer, index) => (
          <ProductCard
            key={index.toString()}
            offer={offer}
          />
        ))
      }
      {isProductsLoading && <LoadingSpinner />}
    </ul>
  );
}


export default ProductsList;
