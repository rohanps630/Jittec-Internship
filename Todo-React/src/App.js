import "./App.css";
import React, { useState } from "react";
import { ListItem, TodoInput, TodoFilter } from "./Components";

let id = 0;

export default function App() {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([
    { id: id++, title: "Task A", completed: false },
    { id: id++, title: "Task B", completed: false },
    { id: id++, title: "Task C", completed: false },
  ]);

  const addItem = (title) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        title,
        completed: false,
        id: id++,
      },
    ]);
  };

  const toggleCompletion = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeCompletedItems = () => {
    setItems((prevItems) => prevItems.filter((item) => !item.completed));
  };

  return (
    <>
      <h1>todos</h1>
      <TodoInput
        aria-label="Type a task to add to the list"
        placeholder="What needs to be done?"
        onSubmit={addItem}
      />
      <hr />
      <TodoFilter value={filter} onChange={setFilter} />
      <ul>
        {items
          .filter((item) => {
            switch (filter) {
              case "all":
                return true;
              case "completed":
                return item.completed;
              case "uncompleted":
                return !item.completed;
              default:
                return [];
            }
          })
          .map((item) => (
            <ListItem
              key={item.id}
              title={item.title}
              completed={item.completed}
              onClick={() => toggleCompletion(item.id)}
            />
          ))}
      </ul>
      <button
        disabled={!items.some((item) => item.completed)}
        onClick={removeCompletedItems}
      >
        Remove completed items
      </button>
    </>
  );
}
