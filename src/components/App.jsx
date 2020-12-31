import React, { Component } from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';
import Work from './Work.jsx';

let Title = styled.h2`
  color: black;
  font: Times New Roman;
`;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title>Algorithm Problems</Title>
        <Question />
        <br />
        <Work />
      </div>
    )
  }
}

export default App;