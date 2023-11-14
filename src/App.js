import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const inputRef = useRef();

  const addATask = () => {
    if(!inputRef.current.value) return;
    const newTaskObject = {taskText: inputRef.current.value, taskState: false};
    setTasksArray([...tasksArray, newTaskObject]);
    inputRef.current.value = "";
  };

  const taskClicked = (taskIndex) => {
    let newTasksArray = [...tasksArray];
    newTasksArray[taskIndex].taskState = !newTasksArray[taskIndex].taskState;

    setTasksArray(newTasksArray);
  }

  const deleteTask = (taskIndex) => {
    let newTasksArray = [...tasksArray];
    newTasksArray.splice(taskIndex, 1);
    setTasksArray(newTasksArray);
  }

  return (
    <div className="App">
      <h2>To Do List</h2> 
      <div class="tasksContainer">

        <ul>
          { tasksArray.map(({ taskText, taskState }, taskIndex) => {
            return(
              <div class="taskContainer">
                <li 
                  onClick={() => taskClicked(taskIndex)} 
                  className={taskState ? "completedTask" : ""} 
                  //! isn't best practice style={{textDecoration : taskState ? "line-through" : ""}}
                  key={taskIndex}
                >
                  { taskText }
                </li>
                <span onClick={() => deleteTask(taskIndex)} > ❌ </span>
              </div>
            )
          }) }
        </ul>
        <input ref={inputRef} placeholder='Enter A Task...' />
        <button onClick={addATask} >Add</button>

      </div>
    </div>
  );
}

export default App;
