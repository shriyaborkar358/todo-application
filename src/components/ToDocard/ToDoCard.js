import React from "react";
import "./ToDoCard.css";

function ToDoCard({ task, category }) {
  const CATEGORY_EMOGI_MAP = {
    learning: "📑",
    shopping: "🛒",
    personal: "🤵",
    work: "🧑‍🏭",
    health: "👨‍⚕️",
    others: "🤷‍♂️",
  };

  const CATEGORY_COLORS = {
    learning: "purple",
    shopping: "brown",
    personal: "gray",
    work: "pink",
    health: "yellow",
    others: "red",
  };

  return (
    <div className="todo-card">
      {task}
      <span
        className="category"
        style={{
          backgroundColor: CATEGORY_COLORS[category],
        }}
      >
        {CATEGORY_EMOGI_MAP[category]}
        {category}
      </span>
    </div>
  );
}

export default ToDoCard;
