import React, {Component} from 'react'
import Header from '../Header'
import SecondBlock from '../Second-block'
import './first-section.css'
export default class FirstSection extends Component{
    state = {
        currentName: '',
            elements: []
    
    }
    addNewText = (event) => {
        this.setState({
            currentName: event.target.value
        })
    }
    
    setCurrentName = (event) => {
        if (event.key === 'Enter'){
            event.target.value = ''
            this.addItem()
        }
    } 
    deleteItem = (id) => {
        this.setState(({elements}) => {
            const idx = elements.findIndex((el) => el.id === id);
            const after = elements.slice(0,idx);
            const before = elements.slice(idx+1);
            const newArr = [...after,...before];
            return {
                ...this.state,
                elements :newArr
            }
            })
    }
   addItem = () => {
    this.setState(({elements}) => {
        return {
            elements: [...elements,{name: this.state.currentName,id: this.state.elements.length + 1}],
            currentName: this.state.currentName,
        }
    })
   }
  
    render (){
    return (
    <section className='todoapp'>
        <Header addNewText = {this.addNewText} setCurrentName = {this.setCurrentName}/>
        <SecondBlock currentName = {this.state.currentName} elements = {this.state.elements} onDeleted = {this.deleteItem}/>
        </section>
    )
    }
}

