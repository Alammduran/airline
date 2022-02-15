import React from "react";

const Input = ({ name, handleChange, label }) => {
  return (
    <div className="container__box">
      <label>
        {label}
        <input
          className="container__input"
          name={name}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Input;
