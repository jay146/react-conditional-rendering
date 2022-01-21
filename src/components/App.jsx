import React from "react";
import Form from "./Form";

var isLogged = true;

function App() {
  return isLogged ? (
    <h1>
      used ternary operator for displaying function as an operator if user is
      logged in{" "}
    </h1>
  ) : (
    <Form />
  );
}

export default App;
