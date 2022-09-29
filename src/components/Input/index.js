import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, handleChange, label }) => {
  return (
    <div className="input-box">
      <label>
        {label}
        <input className="simple-input" name={name} onChange={handleChange} />
      </label>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  label: PropTypes.string,
};
Input.defaultProps = {
  label: "Label",
};

export default Input;
