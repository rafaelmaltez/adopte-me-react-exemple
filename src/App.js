import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pingo" animal="dog" breed="Mini Golden" />
      <Pet name="Kit Cat" animal="cat" breed="White Cat" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
