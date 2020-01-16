import React from 'react';


const ToDoList = ({ toDoList, handleDeleteToDo, handleClearList }) => {
  return (
    <div className='to-do-list'>
      {
        toDoList.map((toDo, key) => (
          <div className='to-do-item' key={key}>
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
              <h6> {toDo} </h6>
              <div className='todo-icon'>
                <span className='mx-2 text-success'>
                  <i className='fas fa-pen'></i>
                </span>
                <span className='mx-2 text-danger'>
                  <i 
                    className='fas fa-trash'
                    onClick={() => handleDeleteToDo(key)} 
                  />
                </span>
              </div>
            </li>
        </div>
        ))
      }
      <button 
        className='btn btn-danger btn-block text-capitalize mt-5' 
        type='button'
        onClick={() => handleClearList()}
      >
        Clear List
      </button>
    </div>
)};

export default ToDoList;