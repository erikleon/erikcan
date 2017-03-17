import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>Hey</button>
    )
  }
}
export default Hello;
