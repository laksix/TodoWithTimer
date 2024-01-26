import React from 'react';
import TodoIistItem from '../Todo-list-item';
import "./todo-list.css"


const elements = [
    {
    name : 'learn react',
    status: 'default',
    id: 0,
    },
    {
    name: 'sosat',
    status: 'default',
    id: 1,
    },
    {
    name : 'completed',
    status: 'completed',
    id: 2,
    }
]

const Todolist = () => {
    return (
    <ul className='todo-list'>
     {elements.map(e => {
    return <TodoIistItem name={e.name} status={e.status} key = {e.id}/>
     })}
 </ul>
    )
}

export default Todolist