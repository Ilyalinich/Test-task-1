import React from 'react';
import PropTypes from 'prop-types';
import './product-card.css';
import {Link} from 'react-router-dom';
import {ActionsType} from '../../constant';

const FULL_PERCENTS_VALUE = 100;

function ProductCard({offer}) {
  const {image, name, link, price, priceDiskount, action} = offer;

  const isDiscount = priceDiskount < price;
  const discount = Math.round((price-priceDiskount)/price*FULL_PERCENTS_VALUE);

  return (
    <li className="product-card">
      {isDiscount && <span className="product-card__lable product-card__lable--sale">{`-${discount}%`}</span>}
      {action === ActionsType.HIT && <span className="product-card__lable product-card__lable--hit">{action}</span>}
      {action === ActionsType.NEW && <span className="product-card__lable product-card__lable--new">{action}</span>}
      <Link className="product-card__link" to={link}>
        <img className="product-card__img" src={image} width="220" height="240" alt={name}/>
      </Link>
      <p className="product-card__description">
        <Link className="product-card__link" to={link}>{name}</Link>
      </p>
      <div className="product-card__price">
        <b className={`product-card__standart-price ${isDiscount ? 'product-card__standart-price--with-discount' : ''}`}>{price} &#8381;</b>
        {isDiscount && <p className="product-card__discount-price">{priceDiskount} &#8381;</p>}
      </div>
      <Link className="product-card__link button" to={link}>Подробнее</Link>
    </li>
  );
}

ProductCard.propTypes = {
  offer: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceDiskount: PropTypes.number.isRequired,
    action: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
