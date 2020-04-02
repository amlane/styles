# styles

> a component based design system

[![NPM](https://img.shields.io/npm/v/styles.svg)](https://www.npmjs.com/package/@amlane/styles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save styles
```

## Usage

```jsx
import React, { Component } from "react";

import { ExampleComponent, Button } from "styles";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Button
          text="Hello"
          background="papayawhip"
          color="palevioletred"
          square
        />
        <Button text="Goodbye" variant="primary" />
        <Button text="Delete" variant="outline-danger" rounded />
      </div>
    );
  }
}
```

## License

MIT © [amlane](https://github.com/amlane)
