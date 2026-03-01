import React from "react";
import MealItemForm from "./MealItemForm";
import "../styles/meals/MealItem.css";

export default function MealItem({ title, description, price }) {
  return (
    <li className="meal">
      <div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <span className="price">${price}</span>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}
