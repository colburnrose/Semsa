import React, { useState } from "react";
import RegisterForm from "../components/register/RegisterForm";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };

  return (
    <>
      <div className="container-fluid bg-warning p-5 text-center">
        <span className="font-weight-bold">
          <h5 className="text-center">Join OPENSOURCE:DEV</h5>
          <h1>Create your account</h1>
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
