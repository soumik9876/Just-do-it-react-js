import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js'
import Header from './components/Header';
import Additem from './components/Additem'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos: res.data}))
  }

  markCompleted=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id)
      {
        todo.completed^=1
      }
      return todo
    })})
  }

  delete = (id )=>{
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id
    )]}));
  }

  addItem=(title)=> {
    Axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    .then(res=>this.setState({todos: [...this.state.todos,res.data]}));
    
  }
  render()
  {
   // console.log(this.state.todos)
    return (
      // <Container>
      <Router>
      <div className="App" >
        <Header/>
        <Route path="/" render={props =>(
          <React.Fragment>
            <Additem addItem={this.addItem}/>
            <Todo todos={this.state.todos} markCompleted={this.markCompleted} delete={this.delete}/>
          </React.Fragment>
        )}/>
        
      </div>
      </Router>
      // </Container>
    );
  }
}

export default App;
