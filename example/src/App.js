import React, { Component } from "react";

import { Button } from "@amlane/styles";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <ExampleComponent text="Modern React component module" /> */}
        <Button text="Hello" style={{ color: "silver" }} />
      </div>
    );
  }
}
