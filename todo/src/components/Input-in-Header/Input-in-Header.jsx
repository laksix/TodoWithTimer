import React, { Component } from 'react';
import './Input-in-Header.css';
export default class Input extends Component {
  state = {
    input1: '',
    input2:'',
    input3:'',
    }
    handleKeyUp = (e) => {
      if (e.key === 'Enter'){
        this.setState({
          input1: '',
          input2: '',
          input3: ''
        })
      }
    }
  render() {
    return (
      <form className='inputsTimer' onKeyUp={this.props.clearInput}>
      <input
        className="new-todo"
        placeholder="What need to be done?"
        value = {this.state.input1}
        autoFocus
        onChange={(e) => {
          this.props.addNewText(e)
          this.setState({input1:e.target.value})
        }}
        onKeyUp={this.handleKeyUp}
        onKeyDown={this.props.setCurrentName}
      ></input>
      <input className="form__timer" onKeyUp={this.handleKeyUp} value = {this.state.input2} placeholder="Min" type='number' onChange={(e) => {
        this.props.setTimeSec(e);
        this.setState({input2: e.target.value})
      }} autoFocus></input>
      <input className="form__timer" onKeyUp={this.handleKeyUp} value = {this.state.input3} placeholder="Sec" type='number' onChange={(e) => {
        this.props.setTimeMin(e);
        this.setState({input3: e.target.value})
      }}autoFocus></input>
      </form>
    )
    }
  }
