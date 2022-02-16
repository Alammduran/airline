import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Input from "./";

describe("Input", () => {
  it("display all menu options", () => {
    render(<Input label="name" />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });
});
