import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled, { css } from "react-emotion";

const Button = props => {
  const { children, classes, element } = props;

  const Container = styled(element)`
    background: #333;
    padding:0.5em 1em;
    border:0;
    border-radius:0.5em;
  `;
  const defaultClass = css`
    color: #FFF;
  `;

  return (
    <Container className={classnames(defaultClass, classes)}>
      {children}
    </Container>
  );
};

Button.propTypes = {};

Button.defaultProps = {
  element: "button"
};

export default Button;
