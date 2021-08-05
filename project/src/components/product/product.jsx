import React from 'react';
import PropTypes from 'prop-types';
import './product.css';
import {Link} from 'react-router-dom';


const FULL_PERCENTS_VALUE = 100;

function Product({actionLabelclassName = '', product}) {
  const {image, name, link, price, priceDiskount, action} = product;

  const isDiscount = priceDiskount < price;
  const discount = Math.round((price-priceDiskount)/price*FULL_PERCENTS_VALUE);

  return (
    <article className="product">
      {isDiscount && <span className="product__lable product__lable--sale">{`-${discount}%`}</span>}
      {action && <span className={`product__lable product__lable--action ${actionLabelclassName}`}>{action}</span>}
      <Link className="product__link" to={link}>
        <h3 className="product__name">{name}</h3>
        <div className="product__img-container">
          <img className="product__img" src={image} width="220" height="240" alt="Product"/>
        </div>
      </Link>
      <div className="product__price-container">
        <b className={`product__actual-price ${isDiscount ? 'product__actual-price--with-discount' : ''}`}>
          {isDiscount ? priceDiskount : price} &#8381;
        </b>
        {isDiscount && <span className="product__old-price">{price} &#8381;</span>}
      </div>
      <Link className="product__link button" to={link}>Подробнее</Link>
    </article>
  );
}

Product.propTypes = {
  actionLabelclassName: PropTypes.string,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceDiskount: PropTypes.number.isRequired,
    action: PropTypes.string,
  }).isRequired,
};

export default Product;
