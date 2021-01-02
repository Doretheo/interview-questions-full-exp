import React, { Component } from 'react';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      toggle: false,
      selection: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    const { value } = event.target;
    this.setState({ input: value })
  }

  render() {
    const { input, toggle, selection } = this.state;
    return (
      <div>
        <label>
          Type Name Of Question:
          <br />
          <input type="text" name="question" value={input} onChange={(event) => {this.handleInput(event)}}/>
          <h3>{input.split('*').map((line, index) => (
            <li key={index}>{line}</li>
          ))}</h3>
        </label>
      </div>
    )
  }
}

export default Question;