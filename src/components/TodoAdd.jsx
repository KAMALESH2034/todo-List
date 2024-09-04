import React, { useState } from 'react';

const TodoAdd = ({ addCard,
  inpName,
  setInpName,
  inpDesc,
  setInpDesc,
  btnText
 }) => {
  
  return (
   <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-lg-12 '>
     <form onSubmit={(e)=>addCard(e)} className='todo-form '>
      
     <div className='col-lg-4'>
     <input 
        type="text" 
        id="todo-name"
        placeholder="Todo Name" 
        required
        value={inpName}
        onChange={(e) => setInpName(e.target.value)} 
      />
     </div>

      
     <div className='col-lg-4'>
     <input 
        type="text" 
        id="todo-description"
        placeholder="Todo Description" 
        required
        value={inpDesc}
        onChange={(e) => setInpDesc(e.target.value)} 
      />
     </div>

 
      
     <button className=' col btn-addToDo btn btn-success px-4' type="submit"> {btnText}</button >
    
     
    </form>
    </div>
    </div>
   </div>
  );
};

export default TodoAdd;