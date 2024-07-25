import React from "react";
import "./ToDoCard.css";
import DelImg from "./delete-icon.png";

function ToDoCard({ index, task, category, deleteItem }) {
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
      <img
        src={DelImg}
        className="delete-icon"
        alt="Delete"
        onClick={() => {
          deleteItem(index);
        }}
      />
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
