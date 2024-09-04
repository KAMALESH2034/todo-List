import React from 'react'

function FilterTodo({filtercard, handleFilter}) {
  return (
    <div className='filter-box'>
      <span>My Todos</span>
      <div>
        <label className='label'>Status Filter : </label>
        <select
        className={`card-status ${filtercard}`}  
        name='todo-filter'
        id='todo-filter'
        value={filtercard}
        onChange={(e) => handleFilter(e)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </div>
    </div>
  )
}

export default FilterTodo