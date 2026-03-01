import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Header";
import Meal from "./components/Meal";
import Cart from "./components/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
        {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      </main>
    </CartProvider>
  );
}

export default App;
