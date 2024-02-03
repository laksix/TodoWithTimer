import React,{Component} from 'react'
import './todo-list-item.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'




export default class TodoIistItem extends Component {
  state = {
    date: new Date()
  }

    
   
  render() {
    const {name, onDeleted,onItemClick,onStartEdit,id} = this.props;
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
       
      var result = () => {
        const date = formatDistanceToNow(
          new Date(this.state.date),
          {includeSeconds: true}
        )
        return date
      }

      
        return (
            <li className= {classTag} onClick = {() => {onItemClick()}}>
                <div className='view'>
                   
                    <input className='toggle' type='checkbox' checked = {this.props.completed} onChange={() => {}}/>
                    <label>
                    <span className='description'>{name}</span>
                        <span className='created' >{result()}</span>
                    </label>
                    <button className='icon icon-edit' onClick = {onStartEdit}></button>
                    <button className='icon icon-destroy' onClick = {onDeleted}></button>
                </div>

                {this.props.editing ? 
                
                <input className='edit' value = {name} onChange={(event) => this.props.setNameEdit(event,id)} onKeyUp={this.props.onFinishEdit} autoFocus/>
             : null}
            </li>
        )
    }
  }

