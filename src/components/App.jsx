import React from "react";
import Form from "./Form";

var isLogged = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={isLogged} />;
    </div>
  );
}

export default App;
