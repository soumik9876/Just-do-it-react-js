import React, { Component } from 'react';
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'
class Todo extends Component {
    render() {
        console.log(this.props.todos)
        return this.props.todos.map((todo)=>
        (
            <Todoitem key={todo.id} todo={todo} markCompleted={this.props.markCompleted} delete={this.props.delete} />
        )
        );
    }
}
Todoitem.propTypes = {
    todos : PropTypes.array.isRequired,
    markCompleted : PropTypes.func.isRequired,
    delete : PropTypes.func.isRequired
}
export default Todo;