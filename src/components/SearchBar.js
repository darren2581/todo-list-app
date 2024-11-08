const SearchBar = () => {
  return (
    <div className='input-container'>
        <input type="text" className='input-task' placeholder='Enter a task' />
        <button className='add-btn'>
        <span class="material-symbols-outlined">add_circle</span>
        </button>
      </div>
  )
}

export default SearchBar