import React, {Component} from 'react';
import TodoIistItem from '../Todo-list-item';
import "./todo-list.css"



export default class Todolist extends Component {

    render()
    {
    const {onDeleted,onItemClick,onStartEdit} = this.props
    return (
    <ul className='todo-list'>
     {this.props.elements.map(e => {
    return <TodoIistItem editing = {e.editing} onStartEdit = {() => onStartEdit(e.id)} name={e.name} key = {e.id} onItemClick = {() => onItemClick(e.id)} completed = {e.completed} hidden = {e.hidden} onDeleted = {() => onDeleted(e.id)}/>
     })}
 </ul>
    )
}
}

