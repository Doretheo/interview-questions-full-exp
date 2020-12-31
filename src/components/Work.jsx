import React from 'react';

const Work = () => {
  // input
  let input = [{value: 4}, {value: 1}, {value: 3}, {value:1}];
  // work
  let result;
  let insertion = (input) => {
    // map over the input
    let counter = 0;
    var recurse = (data) => {
      let result = [];
      data.map((order) => {
        result[order.value] = order;
      })
      return result;
    }
    return recurse(input);
  }
  //return
  return (
    <div>
      input: {JSON.stringify(input)}
      <br />
      <br />
      answer: {JSON.stringify(insertion(input))}
    </div>
  )
}

export default Work;