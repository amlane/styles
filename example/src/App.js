import React, { Component } from "react";

import { ExampleComponent, Button } from "styles";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Button text="Hello" bgColor="purple" rounded />
        <Button text="Goodbye" />
      </div>
    );
  }
}
