import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../service/api";
import { Link, useLocation } from "react-router-dom";

const Book = () => {
  const { search } = useLocation();
  let reservation = new URLSearchParams(search).getAll("reservacion");
  useEffect(() => {
    console.log(reservation);
  }, [reservation]);

  const book = () => {
    axios
      .post(API_URL + `api/booking?id=${reservation}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <h1>Book</h1>;
};

export default Book;
