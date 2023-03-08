import React from "react";
import reactDom from "react-dom";
const name = "Rushikesh";
const currentDate = new Date();
const year = currentDate.getFullYear();
reactDom.render(
  <div>
    <p>Hello :{name}</p>
    <p>Year :{year}</p>
  </div>,
  document.getElementById("root")
);
