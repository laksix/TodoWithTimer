import React, { Component } from 'react'
import './Input-in-Header.css'
export default class Input extends Component {


   
    render()
    {return (
    <input className='new-todo' value = {this.props.name}
    placeholder='What needs to be done?' autoFocus onChange={this.props.addNewText} onKeyDown={this.props.setCurrentName}></input>
)
}
}
