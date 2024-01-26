import React from 'react'
import FooterList from '../Footer-list'
import './footer.css'
const Footer = () => {
    return <footer className='footer'>
        <span className='todo-count'>1 items left</span>
        <FooterList/>
        <button className="clear-completed">Clear completed</button>
    </footer>
}
export default Footer