import React from "react";
import Todolist from "../Todo-list/todo-list";
import Footer from '../Footer/footer'
import './secondblock.css'
const SecondBlock = () => {
    return (
        <section className="main">
            <Todolist/>
            <Footer/>
        </section>
    )
}
export default SecondBlock