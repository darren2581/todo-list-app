import './App.css';
import SearchBar from './components/SearchBar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container">
      {/* Title */}
      <h2 className='title'>To-Do List</h2>

      {/* Add the Search Bar */}
      <SearchBar/>
      
      {/* Add the TaskList  */}
      <TaskList/>
    </div>
  );
}

export default App;
