import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import styles from "../styles.css";

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 40px;
  border-radius: ${props => (props.rounded ? "5px" : 0)};
  border: none;
  background: ${props => props.bgColor || "#1a71b1"};
  color: white;
  margin: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { text, style, bgColor, rounded } = this.props;

    return (
      <StyledButton style={style} bgColor={bgColor} rounded={rounded}>
        {text}
      </StyledButton>
    );
  }
}
