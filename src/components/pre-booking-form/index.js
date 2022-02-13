import React from "react";
import Select from "../select";

const PreBookingForm = ({ flightId, passengers_numbers }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(passengers_numbers);
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="container__box">
      <form>
        <input type="hidden" />
        <Select
          name="passengers_numbers"
          label="Pasajeros:"
          options={numbers}
          handleChange={handleInputChange}
          isArrayWithoutKeys={true}
        />
      </form>
    </div>
  );
};

export default PreBookingForm;
