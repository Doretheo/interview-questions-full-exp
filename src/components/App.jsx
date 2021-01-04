import React, { Component } from 'react';
import styled from 'styled-components';
import Problems from './Problems.jsx';

let Page = styled.div`
  margin: 0;
  display: relative;
`;

let Title = styled.h2`
  color: black;
  font: Times New Roman;
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Page>
        <Title>Algorithm Problems</Title>
        <Problems />
      </Page>
    )
  }
}

export default App;