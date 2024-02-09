// Menu component in Menu.js
import React from "react";
import { productList } from "../../src/assets/data/productList";
import "../styles/Menu.css";
import Products from "../components/Products"; // Ensure this path is correct

function Menu() {
  return (
    <div className="menu" id="products">
      <h1 className="menuTitle">Our Products</h1>
      <div className="menuList">
        {productList.map((menuItem, key) => {
          return (
            <Products
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              description={menuItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
