import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Problems extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.grabProblems = this.grabProblems.bind(this);
  }

  grabProblems() {
    axios.get('problems')
      .then(res => res.data)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <p>Problem sets</p>
    )
  }
}

export default Problems;