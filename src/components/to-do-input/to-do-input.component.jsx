import React from 'react';

const ToDoInput = ({ toDo, handleAddToDo, handleToDoChange }) => {
  console.log(toDo);
  return (
  <div className='to-do-input card card-body my-3'>
    <form onSubmit={handleAddToDo}>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text bg-primary text-white'>
            <i className='fas fa-book'/>
          </div>
        </div>
        <input 
          className='form-control text-capitalize'
          name='toDo' 
          type='text' 
          label='toDo' 
          placeholder='what should you do?'
          onChange={handleToDoChange}
          value={toDo}
          required
        />
      </div>
      <button className='btn btn-block btn-primary mt-3' type='submit'> add </button>
    </form>
  </div>  
)};

export default ToDoInput;