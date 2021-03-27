import React from "react";
import classNames from "classnames";

import "style.scss";

const Button = (style, handleSubmit) => {
  return (
    <button className={classNames(button, style)} onClick={handleSubmit} />
  );
};

//add proptypes

export default Button;
