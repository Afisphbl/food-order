import React, { forwardRef } from "react";
import styles from "../styles/ui/Input.module.css";

const Input = forwardRef(({ label, input, id }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...input} />
    </div>
  );
});

export default Input;
