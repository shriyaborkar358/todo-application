import React, { useState } from "react";
import "./Home.css";
import Imgadd from "./add.png"
import ToDoCard from "../../components/ToDocard/ToDoCard"
import toast, {Toaster} from "react-hot-toast";

function Home() {

  const [todoList, setTodoList] = useState([
     "Chocolate",
    "Dairy Milk"
    ])

  const [newTask, setNewTask] = useState("")

  return (
    <div>
      <h1 className="heading">ToDO Application📑</h1>

        <div className="todocard-container">
          {
            todoList.map((todoItem, i)=>{
              return(
                <div key={i}>
                  <ToDoCard key={i}  todoItem={todoItem}/>
                </div>
              )
            })
          }

          {
            todoList.length=== 0 ?
            <p>There is no task, please add a new task</p>:
            null
          }
        </div>

        <div className="add-input-conatiner">
          <input
            type="text"
            placeholder="Enter a ToDolist item"
            className="todolist"
            value={newTask}
            onChange={(e)=>{
              setNewTask(e.target.value) 
            }}
          />

          <select className="todo-options">
            <option>Learning</option>
            <option>Shopping</option>
            <option>Personal</option>
            <option>Work</option>
            <option>Health</option>
            <option>Others</option>
          </select>

          <img
           src={Imgadd}
            alt="add"
            className="add-icon"
            onClick={()=>{

              if(newTask === ''){
                toast.error("Enter Task first !")
                return
              }
              setTodoList([...todoList, newTask])
              setNewTask("")
              toast.success("Task added successfully!")
            }}
           />
        </div>
        <Toaster/>
      </div>

  );
}

export default Home;
