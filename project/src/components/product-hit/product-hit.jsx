import React from 'react';
import Product from '../product/product';
import './product-hit.css';

function ProductHit(props) {
  return (
    <Product
      actionLabelclassName={'product__lable--hit'}
      {...props}
    />
  );
}

export default ProductHit;
