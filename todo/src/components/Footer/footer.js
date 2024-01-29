import React, { Component } from 'react'
import FooterList from '../Footer-list'
import './footer.css'
export default class Footer extends Component{
    countItem = (elements) => {
        const count = elements.length
        return (`${count} items left`)
    }
    render(){
    return <footer className='footer'>
        <span className='todo-count'>{this.countItem(this.props.elements)}</span>
        <FooterList/>
        <button className="clear-completed">Clear completed</button>
    </footer>
}
}
