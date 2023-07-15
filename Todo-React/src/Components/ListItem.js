import React from "react";

export function ListItem({ title, completed, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <span>{title}</span>
    </li>
  );
}
