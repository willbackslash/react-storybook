import React from "react";
import PropTypes from "prop-types";
import { CustomButton } from "./styles";

const Button = ({ children, outline, ...props }) => {
  return (
    <CustomButton outline={outline} {...props}>
      {children}
    </CustomButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  outline: false,
};

Button.displayName = "Button";

export {
    Button
}
