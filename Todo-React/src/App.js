import "./App.css";
import React, { useReducer, useState } from "react";
import { ListItem, TodoInput, TodoFilter } from "./Components";

let id = 0;

function reducer(items, action) {
  switch (action.type) {
    case "add":
      return [
        ...items,
        {
          title: action.title,
          completed: false,
          id: id++,
        },
      ];
    case "toggle":
      return items.map((item) => ({
        ...item,
        completed: item.id === action.id ? !item.completed : item.completed,
      }));
    case "removeCompleted":
      return items.filter((item) => {
        return !item.completed;
      });
    default:
      return [];
  }
}

export default function App() {
  const [filter, setFilter] = useState("all");
  const [items, dispatch] = useReducer(reducer, [
    { id: id++, title: "Task A", completed: false },
    { id: id++, title: "Task B", completed: false },
    { id: id++, title: "Task C", completed: false },
  ]);

  return (
    <>
      <h1>todos</h1>
      <TodoInput
        aria-label="Type a task to add to the list"
        placeholder="What needs to be done?"
        onSubmit={(title) => {
          dispatch({ type: "add", title });
        }}
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
              onClick={() => {
                dispatch({ type: "toggle", id: item.id });
              }}
            />
          ))}
      </ul>
      <button
        disabled={!items.some((item) => item.completed)}
        onClick={() => {
          dispatch({ type: "removeCompleted" });
        }}
      >
        Remove completed items
      </button>
    </>
  );
}
