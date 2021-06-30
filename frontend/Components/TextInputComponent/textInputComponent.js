import React from "react";
import PropTypes from "prop-types";

const textInput = ({
  type,
  placeholder,
  value,
  name,
  onchange,
  id,
  fieldValue,
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          {fieldValue}
        </span>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={onchange}
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

textInput.prototype = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fieldValue: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onchange: PropTypes.func,
};
export default textInput;
