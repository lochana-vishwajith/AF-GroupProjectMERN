import React from "react";
import PropTypes from "prop-types";

const textView = ({ name, value, classname, id }) => {
  return (
    <span className={classname} name={name} id={id}>
      {value}
    </span>
  );
};

textView.prototype = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default textView;
