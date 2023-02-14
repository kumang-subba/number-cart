import React, { Component } from "react";
import Counter from "./counter";
import Button from "@mui/material/Button";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.props.onReset} variant="contained" color="error">
          Reset
        </Button>
        <br />
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
