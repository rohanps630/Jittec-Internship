import React from "react";

export function TodoFilter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <select
        id="filter"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
