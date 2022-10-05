const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
