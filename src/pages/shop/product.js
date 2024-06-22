import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import classes from './book.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Product = (props) => {
  const { id, productName, price, description, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className={classes.productCardContainer}>
      <Card className={classes.productCard}>
        <Card.Img variant="top" src={productImage} className={classes.productImage} />
        <Card.Body className={classes.cardBody}>
          <Card.Title className={classes.cardTitle}>{productName}</Card.Title>
          <Card.Text className={classes.cardText}>
            ${price.toFixed(2)}
            <br />
            {description}
          </Card.Text>
          <Button variant="primary" className={classes.addToCartBttn} onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
