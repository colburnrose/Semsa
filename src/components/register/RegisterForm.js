import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <FormGroup>
          <Label>UserName</Label>
          <Input
            type="name"
            className="form-control"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            className="form-control"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
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
};

export default RegisterForm;
