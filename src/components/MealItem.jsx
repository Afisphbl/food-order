import React, { useContext } from "react";
import CartContext from "../store/Cart-context";
import MealItemForm from "./MealItemForm";
import "../styles/meals/MealItem.css";

export default function MealItem({ id, title, description, price }) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: title,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <span className="price">${price}</span>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
