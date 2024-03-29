import React, { Component } from 'react';
import Todolist from '../Todo-list/todo-list';
import Footer from '../Footer/footer';
import './secondblock.css';
export default class SecondBlock extends Component {
  render() {
    return (
      <section className="main">
        <Todolist
          min = {this.props.min}
          sec = {this.props.sec}
          onFinishEdit={this.props.onFinishEdit}
          setNameEdit={this.props.setNameEdit}
          onStartEdit={this.props.onStartEdit}
          onDeleted={this.props.onDeleted}
          onItemClick={this.props.onItemClick}
          elements={this.props.elements}
        />
        <Footer
          clearCompleted={this.props.clearCompleted}
          footerItems={this.props.footerItems}
          elements={this.props.elements}
        />
      </section>
    );
  }
}
