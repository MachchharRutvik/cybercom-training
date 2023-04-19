import { useState } from "react";
import React from "react";

function Form() {
  let tasks = [];
  const [idCounter, setIdCounter] = useState(0);
  const [items, setItems] = useState(tasks);
  const [doneTasks,setDoneTasks] = useState([])

  const addTaskHandler = () => {
    if(document.getElementById("task").value){
        tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        let taskValue = {
          task: document.getElementById("task").value,
          done: false,
          id: idCounter,
        };
        setIdCounter(idCounter + 1);
        tasks.push(taskValue);
        if (tasks) {
            setItems(tasks)
          localStorage.setItem("tasks", JSON.stringify(tasks));
          document.getElementById("task").value = "";
        }

    }
  };

  const deleteTask = (id) =>{
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('tasks',JSON.stringify(updatedItems))
  }
  const doneHandler= (id) =>{
    const updatedItems = items.filter(item=>item.id !==id);
    const doneTask = items.find(item=>item.id === id)
    
    doneTasks.push(doneTask)
    
    setItems(updatedItems)
    setDoneTasks(doneTasks)
    localStorage.setItem('tasks',JSON.stringify(updatedItems))
    localStorage.setItem('doneTasks',JSON.stringify(doneTasks))
  }
  return (
    <>
      <div className="container d-flex-column p-5">
        <h1>To Do List</h1>
        <label htmlFor="addTask">Add Task</label>
        <input
          type="text"
          name="task"
          id="task"
          className="form-control border-black m-3"
          required
        />
        <button className="btn btn-primary m-3" onClick={addTaskHandler}>
          Add Task
        </button>
      </div>
      
      <h1>Pending Tasks {items.length}</h1>
      <div className="conatainer d-flex-column justify-content-center">
        <ul className="d-flex-column list-unstyled">
          {items.length > 0
            ? items.map((item) => (
                <li className="mt-3" key={item.id}>
                <span className="mt-1">{item.task}</span>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-success ms-3" onClick={()=>doneHandler(item.id)}>Done</button>
                </li>
              ))
            : null}
        </ul>
      </div>
      <h1>Completed Tasks</h1>
      <div className="conatainer d-flex-column justify-content-center">
        <ul className="d-flex-column list-unstyled">
          {doneTasks.length > 0
            ? doneTasks.map((item) => (
                <li className="mt-3" key={item.id}>
                <span className="mt-1">{item.task}</span>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}

export default Form;
