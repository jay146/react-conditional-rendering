import React from "react";
import Input from "./Input";

function Form() {
  return (
    <div>
      <Input type="text" placeholder="Enter Username" />
      <Input type="password" placeholder="Enter Password" />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div>
  );
}

export default Form;
