import React from "react";
import Form from "./Form";
var userIsRegistered = false;

function renderConditionally() {
  if (userIsRegistered === true) {
    return <h1>hello</h1>;
  } else {
    return <Form />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
