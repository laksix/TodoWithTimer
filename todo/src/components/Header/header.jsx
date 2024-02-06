import React, { Component } from 'react';
import Input from '../Input-in-Header';
import './header.css';
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <Input addNewText={this.props.addNewText} setCurrentName={this.props.setCurrentName} />
      </header>
    );
  }
}
