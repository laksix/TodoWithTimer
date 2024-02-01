import React,{Component} from 'react'
import './todo-list-item.css'




export default class TodoIistItem extends Component {
 


    
   
  render() {
    const {name, onDeleted,onItemClick,onStartEdit} = this.props;
      let classTag = ''
      if (this.props.completed) {
      classTag += 'completed'
      }
      if (this.props.hidden) {
      classTag += ' hidden'
      }
      if (this.props.editing) {
        classTag = 'editing'
      }
    
        return (
            <li className= {classTag} onClick = {() => {onItemClick()}}>
                <div className='view'>
                   
                    <input className='toggle' type='checkbox' checked = {this.props.completed} onChange={() => {}}/>
                    <label>
                    <span className='description'>{name}</span>
                        <span className='created'>created 17 seconds ago</span>
                    </label>
                    <button className='icon icon-edit' onClick = {onStartEdit }></button>
                    <button className='icon icon-destroy' onClick = {onDeleted}></button>
                </div>

                {this.props.editing ? <form>
                
                <input/>
            </form>  : null}
            </li>
        )
    }
  }


