import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <div>
      <Input type="text" placeholder="Enter Username" />
      <Input type="password" placeholder="Enter Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <hr />
      <button type="submit" className="btn btn-primary">
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </div>
  );
}

export default Form;
