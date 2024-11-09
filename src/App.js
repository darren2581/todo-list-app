import './App.css';
import SearchBar from './components/SearchBar';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      taskName, checked: false
    }
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  console.log(toDoList);

  return (
    <div className="container">
      {/* Title */}
      <h2 className='title'>To-Do List</h2>

      {/* Add the Search Bar */}
      <SearchBar addTask={addTask}/>
      
      {/* Add the TaskList  */}
      <TaskList toDoList={toDoList} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
