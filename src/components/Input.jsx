import React from "react";
import styles from "../styles/ui/Input.module.css";

export default function Input({ label, input, id }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} />
    </div>
  );
}
