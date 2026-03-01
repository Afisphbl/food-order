import React from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meal />
        <Cart />
      </main>
    </div>
  );
}

export default App;
