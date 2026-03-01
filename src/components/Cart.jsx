import React, { useContext } from "react";
import CartContext from "../store/Cart-context";
import CartItem from "./CartItem";
import Modal from "./Modul";
import Button from "./Button";
import styles from "../styles/cart/Cart.module.css";

export default function Cart({ onHideCart }) {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  return (
    <Modal onClose={onHideCart}>
      <div className={styles.cart}>
        <h2>Your Cart</h2>
        <ul className={styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={() => cartItemRemoveHandler(item.id)}
              onAdd={() => cartItemAddHandler(item)}
            />
          ))}
        </ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <Button className={styles["button--alt"]} onClick={onHideCart}>
            Close
          </Button>
          {hasItems && <Button className={styles.button}>Order</Button>}
        </div>
      </div>
    </Modal>
  );
}
