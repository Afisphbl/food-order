import React, { useContext, useState } from "react";
import CartContext from "../store/Cart-context";
import CartItemComponent from "./CartItem";
import Modal from "./Modul";
import Button from "./Button";
import CheckOut from "./check-out";
import styles from "../styles/cart/Cart.module.css";

export default function Cart({ onHideCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const onCancleHandler = () => {
    setIsCheckout(false);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    setDidSubmit(false);
    await fetch(
      "https://food-order-bb658-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      },
    );
    setDidSubmit(true);
    setIsSubmitting(false);
    cartContext.clearCart();
  };

  const cartItemsContent = (
    <>
      <h2>Your Cart</h2>
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item)}
          />
        ))}
      </ul>
    </>
  );

  const modalActions = (
    <div className={styles.actions}>
      <Button className={styles["button--alt"]} onClick={onHideCart}>
        Close
      </Button>
      {hasItems && (
        <Button className={styles.button} onClick={orderHandler}>
          Order
        </Button>
      )}
    </div>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <Button className={styles["button"]} onClick={onHideCart}>
          Close
        </Button>
      </div>
    </>
  );

  const cartModalContent = (
    <div className={styles.cart}>
      {cartItemsContent}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOut onCancel={onCancleHandler} onSubmit={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </div>
  );
  return (
    <Modal onClose={onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}
