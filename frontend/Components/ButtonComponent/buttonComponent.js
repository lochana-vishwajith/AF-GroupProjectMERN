import React from "react";
import PropTypes from "prop-types";

const button = ({ type, classname, value, onsubmit }) => {
  return (
    <button type={type} className={classname} onClick={onsubmit}>
      {value}
    </button>
  );
};

button.prototype = {
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onsubmit: PropTypes.func,
};

export default button;
