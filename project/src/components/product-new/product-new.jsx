import React from 'react';
import Product from '../product/product';
import './product-new.css';

function ProductNew(props) {
  return (
    <Product
      actionLabelclassName={'product__lable--new'}
      {...props}
    />
  );
}

export default ProductNew;
