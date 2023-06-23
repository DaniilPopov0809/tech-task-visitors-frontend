// import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import authOperation from "../../redux/auth/operations";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "username": {
        setUsername(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperation.login({ username, password }));
  };

  return (
    <Container className="w-100 h-100 ">
      <Form
        onSubmit={handleSubmit}
        className="text-center border border-1 rounded p-3"
        style={{ maxWidth: "500px" }}
      >
        <Form.Group className="mb-3 text-start">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!username || !password}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;

// LoginForm.propTypes = {
//   visitor: PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string,
//     lastname: PropTypes.string,
//     date: PropTypes.string,
//   }),
//   handleClose: PropTypes.func,
//   setIsOpenModal: PropTypes.func,
// };
