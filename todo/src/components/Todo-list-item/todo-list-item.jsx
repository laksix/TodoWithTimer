import React, { Component} from 'react';
import './todo-list-item.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class TodoIistItem extends Component {
  state = {
    date: new Date(),
    timeLeft: this.props.time,
    isCounting: false,
  };
  
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isCounting) {
        this.setState(prevState => ({
          timeLeft: prevState.timeLeft > 0? prevState.timeLeft - 1: 0
        }))
      }
    },1000)
  }
  componentDidUpdate (prevState) {
    if (this.state.isCounting !== prevState.isCounting) {
      if (this.state.isCounting) {
        this.componentDidMount
      } else {
        this.componentWillUnmount
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  handleStart = () => {
    this.setState({isCounting:true})
  }
  handleStop = () => {
    this.setState({isCounting:false})
  }
  getTIme = (time) => {
    if (typeof time === 'undefined'){
      return '00'
    }
    return time.toString().padStart(2,'0')
  }


  render() {
    const minutes = this.getTIme(Math.floor(this.state.timeLeft / 60))
    const seconds = this.getTIme(this.state.timeLeft - minutes * 60)
    const { name, onDeleted, onItemClick, onStartEdit, id} = this.props;
    let classTag = '';

    
    if (this.props.completed) {
      classTag += 'completed';
    }
    if (this.props.hidden) {
      classTag += ' hidden';
    }
    if (this.props.editing) {
      classTag = 'editing';
    }

    var result = () => {
      const date = formatDistanceToNow(new Date(this.state.date), { includeSeconds: true });
      return date;
    };
   

    return (
      <li
        className={classTag}
        
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={() => {
              return null;
            }}
            onClick={() => {
              onItemClick();
            }}
          />
          <label>
            <span className="description" onClick={() => {
          onItemClick();
        }}>{name} 
            </span>

            <span className="created">created {result()}</span>
          </label>
          <button className="icon icon-play" onClick={this.handleStart}></button>
              <button className="icon icon-pause" onClick={this.handleStop}></button>
               <span className='time-left'>{`${minutes}:${seconds}`}</span>
          <button className="icon icon-edit" onClick={onStartEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>

        {this.props.editing ? (
          <input
            className="edit"
            value={name}
            onChange={(event) => this.props.setNameEdit(event, id)}
            onKeyUp={this.props.onFinishEdit}
            autoFocus
          />
        ) : null}
      </li>
    );
  }
}
