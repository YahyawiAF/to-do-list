import React from "react";
import classNames from "classnames";

import "./style.scss";

const Input = ({ theme, value, onChange, name, type, label }) => {
  return (
    <div className="entry">
      <label className="entry__label">{label}</label>
      <input
        type={type}
        className={classNames("input", theme)}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

//add proptypes

export default Input;
