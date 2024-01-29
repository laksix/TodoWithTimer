import React,{Component} from 'react'
import './todo-list-item.css'




export default class TodoIistItem extends Component {
   state = {
    done: false,
   }

   onItemClick = () => {
    this.setState ((state) => {
        return {
            done: !state.done
        }
    })
   }
  render() {
    const {name, onDeleted} = this.props;
    const {done} = this.state;
    let classNames = ''
    if (done) {
        classNames+= 'completed'
    }
        return (
            <li className= {classNames} onClick = {this.onItemClick}>
                <div className='view'>
                   
                    <input className='toggle' type='checkbox'/>
                    <label>
                    <span className='description'>{name}</span>
                        <span className='created'>created 17 seconds ago</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy' onClick = {onDeleted}></button>
                </div>
            </li>
        )
    }
  }


