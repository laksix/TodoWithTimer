import React,{Component} from "react";
import Todolist from "../Todo-list/todo-list";
import Footer from '../Footer/footer'
import './secondblock.css'
export default class SecondBlock extends Component {
    
    
   
    render()
    {
    return (
        <section className="main">
            <Todolist onDeleted = {this.props.onDeleted} elements = {this.props.elements}/>
            <Footer elements = {this.props.elements}/>
        </section>
    )
}
}
