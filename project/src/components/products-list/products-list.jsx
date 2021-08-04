import React, {useState, useEffect} from 'react';
import './products-list.css';
import Product from '../product/product';
import {createMockProducts} from '../../mock/mock-products';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import {ActionsType} from '../../constant';
import ProductHit from '../product-hit/product-hit';
import ProductNew from '../product-new/product-new';


const FAKE_LOADING_TIME = 2000;

const fetchProducts = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(createMockProducts());
  }, FAKE_LOADING_TIME);
});

const getProductByActionType = (actionType, product) => {
  switch (actionType) {
    case ActionsType.HIT:
      return <ProductHit product={product} />;
    case ActionsType.NEW:
      return <ProductNew product={product} />;
    default:
      return <Product product={product} />;
  }
};


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
    <>
      <ul className="products__list">
        {
          products.map((product, index) => (
            <li key={index.toString()}>
              {getProductByActionType(product.action, product)}
            </li>
          ))
        }
      </ul>
      {isProductsLoading && <LoadingSpinner />}
    </>
  );
}


export default ProductsList;
