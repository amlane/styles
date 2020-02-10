import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}

export class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { text, style } = this.props;

    return (
      <button className={styles.btn} style={style}>
        {text}
      </button>
    );
  }
}
