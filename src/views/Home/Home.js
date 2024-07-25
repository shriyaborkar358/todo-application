import React, { useState, useEffect } from "react";
import "./Home.css";
import Imgadd from "./add.png";
import ToDoCard from "../../components/ToDocard/ToDoCard";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  useEffect(() => {
    if (todoList.length === 0) return;
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function deleteItem(index) {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete this Task!",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      }
      const newTodoList = todoList.filter((item, i) => {
        if (i !== index) {
          return true;
        } else {
          return false;
        }
      });
      setTodoList(newTodoList);
    });
  }

  return (
    <div>
      <h1 className="heading">ToDO Application📑</h1>

      <div className="todocard-container">
        {todoList.map((todoItem, i) => {
          const { task, category } = todoItem;
          return (
            <ToDoCard
              key={i}
              index={i}
              task={task}
              category={category}
              deleteItem={deleteItem}
            />
          );
        })}

        {todoList.length === 0 ? (
          <p className="task-heading">No task to show, please add a new task</p>
        ) : null}
      </div>

      <div className="add-input-conatiner">
        <input
          type="text"
          placeholder="Enter a ToDolist item"
          className="todolist"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />

        <select
          className="todo-options"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Category</option>
          <option value="learning">Learning</option>
          <option value="shopping">Shopping</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="health">Health</option>
          <option value="others">Others</option>
        </select>

        <img
          src={Imgadd}
          alt="add"
          className="add-icon"
          onClick={() => {
            if (newTask === "") {
              toast.error("Enter Task first!");
              return;
            }
            if (category === "") {
              toast.error("Please select a category");
              return;
            }

            setTodoList([...todoList, { task: newTask, category: category }]);
            setNewTask("");
            setCategory("");
            toast.success("Task added successfully!");
          }}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
