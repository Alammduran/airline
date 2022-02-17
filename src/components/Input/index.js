import React from "react";

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

export default Input;
