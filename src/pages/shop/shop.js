import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Booksummary from "../Summary"
import image from '../../assets/products/booi.webp';
export const Shop = () => {
  return (
    <div>
    <div className="image-container">
          <img src={image} alt="Library" />
          <div className="book-summary">
            <Booksummary />
          </div>
    </div>

      <div className="products" style={{display:"flex"}}>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
