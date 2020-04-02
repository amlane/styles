import React, { Component } from "react";

import { ExampleComponent, Button } from "styles";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Button
          text="Hello"
          variant="success"
          background="papayawhip"
          color="palevioletred"
          square
        />
        <Button text="Goodbye" variant="primary" />
        <Button text="Submit" variant="outline-danger" rounded />
      </div>
    );
  }
}
