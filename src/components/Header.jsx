import React from "react";
import image from "../assets/meals.jpg";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import "../styles/layouts/Header.css";

function Header({ onShowCart }) {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <Button className="button" onClick={onShowCart}>
          <ShoppingCart size={20} className="icon" />
          Your Cart
          <span className="badge">0</span>
        </Button>
      </header>

      <div className="main-image">
        <img src={image} alt="Tasty Meals" />
      </div>
    </>
  );
}

export default Header;
