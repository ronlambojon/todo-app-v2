import React from 'react';

import ToDoInput from './components/to-do-input/to-do-input.component';
import ToDoList from './components/to-do-list/to-do-list.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toDoList: [],
      toDo: ''
    };
  }
  
  
  handleToDoChange = event => {
    const { value, name } = event.target;
    console.log('Hello', this.state.toDo);

    this.setState({ [name]: value });
  }

  handleAddToDo = event => {
    event.preventDefault();
    const newToDo = this.state.toDo;
    console.log(newToDo);

    if(newToDo !== '') {
      const newToDoList = [...this.state.toDoList, newToDo];
  
      this.setState({
        toDoList: newToDoList,
        toDo: ''
      });
    }
  }

  handleDeleteToDo = key => {
    const filteredToDoList = this.state.toDoList.filter((toDo, i) => key !== i);
    console.log(filteredToDoList);

    this.setState({
      toDoList: filteredToDoList
    });
  }

  handleClearList = event => {
    this.setState({
      toDoList: []
    });
  }

  render() {
    const { toDo, toDoList } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'> ToDo App </h3>
            <ToDoInput 
              toDo={toDo} 
              handleAddToDo={this.handleAddToDo} 
              handleToDoChange={this.handleToDoChange}
            />
            <ToDoList 
              toDoList={toDoList} 
              handleDeleteToDo={this.handleDeleteToDo}
              handleClearList={this.handleClearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
