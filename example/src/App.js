import React, { Component } from "react";

import { ExampleComponent, Button } from "@amlane/styles";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Button text="Hello" />
      </div>
    );
  }
}
