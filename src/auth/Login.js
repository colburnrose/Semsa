import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GithubLoginButton } from "react-social-login-buttons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert("A new user was registered");
  };

  const loginForm = () => (
    <Form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <FormGroup>
          <Label>Username or email address</Label>
          <Input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button className="btn-lg btn-block" color="info">
          Login
        </Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <GithubLoginButton />
        <div className="text-center">
          <Link to="/register">Sign up</Link>
          <span className="p-2">|</span>
          <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      </div>
    </Form>
  );

  return (
    <>
      <div className="container-fluid bg-warning p-5 text-center">
        <span className="font-weight-bold">
          <h1 className="text-center">OPENSOURCE:DEV</h1>
          <h5>Sign in to OPENSOURCE:DEV</h5>
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">{loginForm()}</div>
        </div>
      </div>
    </>
  );
};

export default Login;
