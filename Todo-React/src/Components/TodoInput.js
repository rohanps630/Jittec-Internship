import React, { useState } from "react";

export function TodoInput({ placeholder, "aria-label": label, onSubmit }) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(event) => {
        onSubmit(text);
        setText("");
        event.preventDefault();
      }}
    >
      <input
        name="input"
        type="text"
        aria-label={label}
        placeholder={placeholder}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </form>
  );
}
