import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "../styles.css";

export default class Button extends Component {
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
