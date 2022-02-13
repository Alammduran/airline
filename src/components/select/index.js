import React from "react";

const Select = ({
  name,
  handleChange,
  label,
  options,
  isArrayWithoutKeys = false,
}) => {
  const getOptionsValues = !isArrayWithoutKeys
    ? options.map((values) => {
        return Object.values(values);
      })
    : Object.values(options);

  return (
    <div className="container__box">
      <label>
        {label}
        <select
          className="container__input"
          name={name}
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
          {getOptionsValues.map((element, key) => {
            return (
              <option key={key} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Select;
