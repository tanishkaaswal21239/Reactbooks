import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import classes from './book.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Product = (props) => {
  const { id, productName, price,description, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <section className={classes.book}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productImage} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
        {price}
        <br/>
        {description}
        </Card.Text>
      <button variant="primary" className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </Card.Body>
    </Card>
    </section>
  );
};