import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "../styles.css";

const StyledButton = styled.button`
  background: orange;
  color: pink;
`;

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { text, style } = this.props;

    return (
      <StyledButton className={styles.btn} style={style}>
        {text}
      </StyledButton>
    );
  }
}
