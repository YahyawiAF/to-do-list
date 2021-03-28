import React from "react";
import classNames from "classnames";

import "./style.scss";

const Button = ({ theme, onClick, content }) => {
  return (
    <button className={classNames("button", theme)} onClick={onClick}>
      {content}
    </button>
  );
};

//add proptypes

export default Button;
