// Products component in Products.js
import React from "react";
import "../styles/Menu.css";

function Products({ image, name, description }) {
  return (
    <div className="productCard">
      <img src={image} alt={name} className="productImage" />
      <div className="productContent">
        <h3 className="productName">{name}</h3>
        <p className="productDescription">{description}</p>
      </div>
    </div>
  );
}

export default Products;
