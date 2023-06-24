import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import authOperation from "../../redux/auth/operations";
import visitorOperation from "../../redux/visitors/operations";
import createData from "../../utils/createDate";

function VisitorForm({ visitor, handleClose, setIsOpenModal, editForm }) {
  console.log("🚀 ~ file: VisitorFrom.js:103 ~ VisitorForm ~ visitor:", visitor)
  console.log("🚀 ~ file: VisitorFrom.js:103 ~ VisitorForm ~ editForm:", editForm)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(visitor ? `${visitor.name}` : "");
  const [lastname, setlastname] = useState(
    visitor ? `${visitor.lastname}` : ""
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastname":
        setlastname(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleVisitorSubmit = (event) => {
    event.preventDefault();
    if (visitor) {
      const { id } = visitor;
      dispatch(visitorOperation.update({ id, name, lastname }));
      setIsOpenModal(false);
    } else {
      const date = createData();
      dispatch(visitorOperation.create({ name, lastname, date }));
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperation.login({ username, password }));
  };

  return (
    <Container className="w-100 h-100 d-flex justify-content-center p-0">
      {visitor || editForm ? (
        <Form onSubmit={handleVisitorSubmit} className="text-center w-100">
          <Form.Group className="mb-3 text-start">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-start">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastname"
              type="text"
              value={lastname}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleClose}
            disabled={!name || !lastname}
          >
            {visitor ? "Update" : "Add"}
          </Button>
        </Form>
      ) : (
        <Form
          onSubmit={handleLoginSubmit}
          className="text-center border border-1 rounded p-3"
          style={{ width: "400px" }}
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
              placeholder="
              Enter password"
              onChange={handleChange}
              value={password}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={!username || !password}
          >
            Login
          </Button>
        </Form>
      )}
    </Container>
  );
}

VisitorForm.propTypes = {
  visitor: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastname: PropTypes.string,
    date: PropTypes.string,
  }),
  handleClose: PropTypes.func,
  setIsOpenModal: PropTypes.func,
};

export default VisitorForm;
