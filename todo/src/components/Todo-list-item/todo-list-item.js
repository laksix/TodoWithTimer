import React,{Component} from 'react'
import './todo-list-item.css'




export default class TodoIistItem extends Component {
  render() {
    
        return (
            <li className={this.props.status}>
                <div className='view'>
                   
                    <input className='toggle' type='checkbox'/>
                    <label>
                    <span className='description'>{this.props.name}</span>
                        <span className='created'>created 17 seconds ago</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy'></button>
                </div>
            </li>
        )
    }
  }


