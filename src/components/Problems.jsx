import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Grid = styled.div``;

const Row  = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

class Problems extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
    this.grabProblems = this.grabProblems.bind(this);
  }

  grabProblems() {
    axios.get('problems')
      .then(res => this.setState({
        data: res.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p>Problem sets</p>
        {/* {data.map((p) => (
          <p>{p}</p>
        ))} */}
      </div>
    )
  }
}

export default Problems;