import React, { useState } from "react";
import "./Register.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert("A new user was registered");
  };

  const registerForm = () => (
    <Form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <FormGroup>
          <label>UserName</label>
          <input
            type="name"
            className="form-control"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button className="btn-lg btn-block" color="info">
          Signup
        </Button>
        <Button className="btn-lg btn-dark btn-block">Cancel</Button>
      </div>
    </Form>
  );

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
          <div className="col-md-6 offset-md-3">{registerForm()}</div>
        </div>
      </div>
    </>
  );
};

export default Register;
