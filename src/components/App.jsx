import React from "react";
import Form from "./Form";

var isLogged = false;

function App() {
  return <Form isRegistered={isLogged} />;
}

export default App;
