import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/Cart-context";
import image from "../assets/meals.jpg";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import "../styles/layouts/Header.css";

function Header({ onShowCart }) {
  const [isBumped, setIsBumped] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (numberOfCartItems === 0) {
      return;
    }
    setIsBumped(true);
    const timer = setTimeout(() => {
      setIsBumped(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [numberOfCartItems]);

  const btnClasses = `button ${isBumped ? "bump" : ""}`;

  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <Button className={btnClasses} onClick={onShowCart}>
          <ShoppingCart size={20} className="icon" />
          Your Cart
          <span className="badge">{numberOfCartItems}</span>
        </Button>
      </header>

      <div className="main-image">
        <img src={image} alt="Tasty Meals" />
      </div>
    </>
  );
}

export default Header;
