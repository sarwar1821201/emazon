import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} =props.product;
    const handleToCart = props.handleToCart
 
    

    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufracture: {seller}</p>
            <p>Ratings:{ratings}</p>
          </div>

          { <button onClick={ ()=>handleToCart (props.product)}  className='btn-cart'>
            Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button> }

        </div>
    );
};

export default Product; 