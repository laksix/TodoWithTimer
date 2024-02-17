import React, { Component } from 'react';
import Header from '../Header';
import SecondBlock from '../Second-block';
import './first-section.css';
export default class FirstSection extends Component {
  state = {
    statusInput: false,
    timeMin: null,
    timeSec : null,
    elements: [],
    footerItems: [
      {
        name: 'All',
        id: 0,
        selected: true,
        onClick: (id) => {
          this.setState(({ footerItems, elements }) => {
            return {
              footerItems: footerItems.map((e) => {
                if (id === e.id) {
                  e.selected = true;
                } else e.selected = false;
                return e;
              }),
              elements: elements.map((e) => {
                e.hidden = false;
                return e;
              }),
            };
          });
        },
      },
      {
        name: 'Completed',
        id: 1,
        selected: false,
        onClick: (id) => {
          this.setState(({ footerItems, elements }) => {
            return {
              footerItems: footerItems.map((e) => {
                if (id === e.id) {
                  e.selected = true;
                } else e.selected = false;
                return e;
              }),
              elements: elements.map((e) => {
                if (e.completed) {
                  e.hidden = false;
                } else e.hidden = true;
                return e;
              }),
            };
          });
        },
      },
      {
        name: 'Active',
        id: 2,
        selected: false,
        onClick: (id) => {
          this.setState(({ footerItems, elements }) => {
            return {
              footerItems: footerItems.map((e) => {
                if (id === e.id) {
                  e.selected = true;
                } else e.selected = false;
                return e;
              }),
              elements: elements.map((e) => {
                if (!e.completed) {
                  e.hidden = false;
                } else e.hidden = true;
                return e;
              }),
            };
          });
        },
      },
    ],
  };
  onItemClick = (id) => {
    this.setState(({ elements }) => {
      return {
        elements: elements.map((e) => {
          if (e.id === id) {
            e.completed = !e.completed;
          }
          return e;
        }),
      };
    });
  };
  addNewText = (event) => {
    this.setState({
      currentName: event.target.value,
    });
  };

  setCurrentName = (event) => {
    if (event.key === 'Enter') {
      event.target.value = '';
      this.addItem();
    
    }
  };
  
  clearCompleted = () => {
    this.setState(({ elements }) => {
      return {
        elements: elements.filter((e) => !e.completed),
      };
    });
  };
  deleteItem = (id) => {
    this.setState(({ elements }) => {
      const idx = elements.findIndex((el) => el.id === id);
      const after = elements.slice(0, idx);
      const before = elements.slice(idx + 1);
      const newArr = [...after, ...before];
      return {
        ...this.state,
        elements: newArr,
      };
    });
  };
  onStartEdit = (id) => {
    this.setState(({ elements }) => {
      return {
        elements: elements.map((e) => {
          if (e.id === id) {
            e.editing = true;
          }
          return e;
        }),
      };
    });
  };

  setNameEdit = (event, id) => {
    this.setState(({ elements }) => {
      return {
        elements: elements.map((e) => {
          if (e.id === id) {
            e.name = event.target.value;
          }
          return e;
        }),
      };
    });
  };
  onFinishEdit = (id) => {
    this.setState(({ elements }) => {
      return {
        elements: elements.map((e) => {
          if (e.id === id) {
            e.editing = false;
          }
          return e;
        }),
      };
    });
  };

  addItem = () => {
    if (this.state.currentName.length === 0) return;
    this.setState(({ elements }) => {
      return {
        elements: [
          ...elements,
          {
            name: this.state.currentName,
            id: this.state.elements.length + 1,
            completed: false,
            hidden: false,
            editing: false,
            timeMin: this.state.timeMin,
            timeSec:this.state.timeSec
          },
        ],
        currentName: '',
      };
    });
  };
  setCurrentMin = (e) => {
    this.setState({
      timeMin : e.target.value
    })
  }
  setCurrentSec = (e) => {
    this.setState({
      timeSec : e.target.value
    })
  }
  clearInput = (e) => {
    if (e.key === 'Enter'){
      this.addItem()
      setTimeout(() => {
        this.setState({
          timeMin:null,
          timeSec:null
        })
      },100)
    }
  }
  
  
   
    

  render() {
    console.log(this.state)
    return (
      <section className="todoapp">
        <Header clearInput = {this.clearInput} setTimeSec = {this.setCurrentMin} setTimeMin = {this.setCurrentSec} addNewText={this.addNewText} setCurrentName={this.setCurrentName} />
        <SecondBlock
          min = {this.state.timeMin}
          sec = {this.state.timeSec}
          onFinishEdit={this.onFinishEdit}
          setNameEdit={this.setNameEdit}
          onStartEdit={this.onStartEdit}
          clearCompleted={this.clearCompleted}
          footerItems={this.state.footerItems}
          onItemClick={this.onItemClick}
          currentName={this.state.currentName}
          elements={this.state.elements}
          onDeleted={this.deleteItem}
        />
      </section>
    );
  }
}
