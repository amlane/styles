import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "../themes/theme";

import styles from "../styles.css";

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  transition: 0.2s ease-in;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: ${props => {
    if (props.square) return props.theme.borderRadius.square;
    if (props.rounded) return props.theme.borderRadius.rounded;
    return props.theme.borderRadius.primary;
  }};

  border: ${props =>
    props.variant
      ? props.theme.borderStyles[props.variant]
      : props.border || props.theme.borderStyles.primary};

  color: ${props =>
    props.variant
      ? props.theme.colors[props.variant]
      : props.color || props.theme.colors.primary};

  background: ${props =>
    props.variant
      ? props.theme.btnStyles[props.variant]
      : props.background || props.theme.btnStyles.primary};

  &:hover {
    filter: brightness(110%);
    background: ${props =>
      props.variant
        ? props.theme.btnStyles[props.variant.replace("outline-", "")]
        : props.background || props.theme.btnStyles.primary};

    color: ${props =>
      props.variant
        ? props.theme.colors[props.variant.replace("outline-", "")]
        : props.color || props.theme.colors.primary};
  }
`;

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    background: PropTypes.string,
    rounded: PropTypes.bool,
    square: PropTypes.bool,
    color: PropTypes.string,
    variant: PropTypes.string
  };

  render() {
    const {
      text,
      style,
      background,
      rounded,
      square,
      color,
      variant
    } = this.props;

    return (
      <ThemeProvider theme={defaultTheme}>
        <StyledButton
          style={style}
          background={background}
          rounded={rounded}
          square={square}
          color={color}
          variant={variant}
        >
          {text}
        </StyledButton>
      </ThemeProvider>
    );
  }
}
