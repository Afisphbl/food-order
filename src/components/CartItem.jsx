import React from "react";
import Button from "./Button";
import styles from "../styles/cart/CartItem.module.css";

export default function CartItem({ name, price, amount, onRemove, onAdd }) {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button onClick={onRemove}>-</Button>
        <Button onClick={onAdd}>+</Button>
      </div>
    </li>
  );
}
