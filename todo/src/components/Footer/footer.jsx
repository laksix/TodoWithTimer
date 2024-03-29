import React, { Component } from 'react';
import FooterList from '../Footer-list';
import './footer.css';
export default class Footer extends Component {
  countItem = (elements) => {
    let count = 0;
    elements.forEach((e) => {
      if (!e.hidden) {
        count++;
      }
    });
    return `${count} item left`;
  };

  render() {
    const { clearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{this.countItem(this.props.elements)}</span>
        <FooterList footerItems={this.props.footerItems} el={this.props.elements} />
        <button onClick={() => clearCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
