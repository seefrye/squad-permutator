import React, { Component } from "react";

let contains_invalid_input = false;
function validate_input(input_values) {
  let invalid_response_count = 0;
  let total_characters = 0;
  for (let i of input_values) {
    if (isNaN(parseInt(i))) {
      invalid_response_count += 1;
    } else {
      total_characters += parseInt(i);
    }
  }
  if (invalid_response_count > 0) {
    contains_invalid_input = true;
  } else {
    contains_invalid_input = false;
  }
  return total_characters;
}

export class TotalCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { twos, threes, fours, fives, sixes } = this.props;
    let total = validate_input([twos, threes, fours, fives, sixes]);
    let totalCheckMessage = "";

    if (contains_invalid_input) {
      totalCheckMessage = <div>Please use integers only</div>;
    } else if (total === 10) {
      totalCheckMessage = <div>Just right!</div>;
    } else if (total > 10) {
      totalCheckMessage = <div>Too much! Remove {total - 10} characters</div>;
    } else if (total < 10) {
      totalCheckMessage = <div>Add {10 - total} characters</div>;
    }

    return <div>{totalCheckMessage}</div>;
  }
}

export default TotalCheck;
