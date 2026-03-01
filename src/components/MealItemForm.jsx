import React from "react";
import Input from "./Input";
import "../styles/meals/MealItemForm.css";

export default function MealItemForm() {
  return (
    <form className="form">
      <Input
        label="Amount"
        id="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
