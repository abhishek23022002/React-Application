import React from "react";

class stateusage extends React.Component {
  constructor() {
    super();
    this.state = { color: "blue" };
  }
  render() {
    return (
      <>
        <h1>The colour of the car is {this.state.color}</h1>
        <button
          onClick={() => {
            this.setState({ color: "red" });
          }}
        >
          Click here to change colour
        </button>
      </>
    );
  }
}
export default stateusage;
