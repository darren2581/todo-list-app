import React, { useState } from 'react';

const SearchBar = ({ addTask }) => {
    const [task, setTask] = useState('');

    function handleAddTask(e) {
        e.preventDefault();
        if (task.trim() === '') return; // Prevent adding empty tasks
        addTask(task);
        setTask(''); // Clear the input field
    }

    return (
        <form className='input-container' onSubmit={handleAddTask}>
            <input 
                type="text" 
                className='input-task' 
                placeholder='Enter a task' 
                value={task} // To clear input field
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="submit" className='add-btn'>
                <span className="material-symbols-outlined">add_circle</span>
            </button>
        </form>
    );
};

export default SearchBar;
