import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pingo",
      animal: "Dog",
      breed: "Mini Golden",
    }),
    React.createElement(Pet, {
      name: "Kit Cat",
      animal: "Cat",
      breed: "White Cat",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
