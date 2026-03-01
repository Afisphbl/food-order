import React from "react";
import Modal from "./Modul";
import Button from "./Button";
import styles from "../styles/cart/Cart.module.css";

export default function Cart({ onHideCart }) {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Schnitzel", amount: 1, price: 16.5 },
  ];
  return (
    <Modal onClose={onHideCart}>
      <div className={styles.cart}>
        <h2>Your Cart</h2>
        <ul className={styles.cartItems}>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.amount}
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>$42.48</span>
        </div>
        <div className={styles.actions}>
          <Button className={styles["button--alt"]} onClick={onHideCart}>
            Close
          </Button>
          <Button className={styles.button}>Order</Button>
        </div>
      </div>
    </Modal>
  );
}
