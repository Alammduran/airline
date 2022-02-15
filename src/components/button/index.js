import React from "react";

const Button = ({ text, type, isDisable = false }) => {
  return (
    <>
      {isDisable ? (
        <button type={type} disabled>
          {text}
        </button>
      ) : (
        <button type={type}>{text}</button>
      )}
    </>
  );
};

export default Button;
