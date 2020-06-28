import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'

export class Todoitem extends Component {
    todostyle = ()=>{
        return{
            backgroundColor: this.props.todo.completed? '#51a84d':'#aec7e6',
            fontFamily : 'calibri',
            fontSize : '110%',
            //fontWeight: 'bold',
            padding : '5px',
            color : '#4a4b4d',
            borderBottom: '1px black dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }
    
    render() {
        const{id,title}=this.props.todo;
        return (
            <div style={this.todostyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this,id)} /> {' '}
                    {title}
                    {/* <Button variant="danger" style={buttonstyle}>X</Button> */}
                    <Button variant="danger" style={buttonstyle} onClick={this.props.delete.bind(this,id)}>x</Button> {' '}
                </p>
            </div>
        );
    }
}

Todoitem.propTypes = {
    todo : PropTypes.array.isRequired,
    markCompleted : PropTypes.func.isRequired,
    delete : PropTypes.func.isRequired
}
const buttonstyle = {
    float: 'right',
    cursor: 'pointer',
    
   // backgroundColor: 'red',
    border: 'none',
    padding: '5px 5px'
}
export default Todoitem;