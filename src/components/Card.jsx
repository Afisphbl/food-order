import React from "react";
import "../styles/ui/Card.css";

export default function Card(props) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
