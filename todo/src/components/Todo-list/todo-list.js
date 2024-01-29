import React, {Component} from 'react';
import TodoIistItem from '../Todo-list-item';
import "./todo-list.css"



export default class Todolist extends Component {

    render()
    {
    const {onDeleted} = this.props
    return (
    <ul className='todo-list'>
     {this.props.elements.map(e => {
    return <TodoIistItem name={e.name} key = {e.id} onDeleted = {() => onDeleted(e.id)}/>
     })}
 </ul>
    )
}
}

