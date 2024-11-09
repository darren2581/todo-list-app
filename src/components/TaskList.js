const TaskList = ({ toDoList, deleteTask }) => {
    return (
      <div className='list-container'>
        <ul className='list'>
          {toDoList.map((task) => (
            <li className='list-item' key={task.taskName}>
              <p className='task-name'>{task.taskName}</p>
              <button className='delete-btn' onClick={() => deleteTask(task.taskName)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TaskList