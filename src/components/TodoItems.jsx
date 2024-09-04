import React,{useState} from 'react'

function TodoItems(
  {
    id,
    name,
    description,
    status,
    handleDelete,
    handleEdit,
    handleStatus
  }) {
    const [innerStatus, setInnerStatus] = useState(status);
  return (
    <div className='todo-card col-lg-3 p-2 m-1 mb-5'>
      <div className='card-name'><span className='fw-bold'>Name :</span>{name}</div>
      <div className='card-description'><span className='fw-bold'>Description :</span> {description}</div>
      
      <div className='card-status1'>
        <label className='fw-bold mx-2'>Status :</label>
        <select
        name ="card-status"
        defaultValue={innerStatus}
        className={`card-status ${innerStatus}`}
        onChange={(e) => handleStatus(e,id)}
        onClick={(e) => setInnerStatus(e.target.value)}
        >
          <option value="notCompleted">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className='butn-group'>
        <button 
        className=' btn btn-success px-4'
        onClick={() => handleEdit(id,name,description)}>Edit</button>

        <button
        className='btn btn-danger px-4'
        onClick={() => handleDelete(id)}
        >Delete</button>

      </div>
    </div>
  )
}

export default TodoItems