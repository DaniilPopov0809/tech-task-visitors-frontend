import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import visitorAPI from "../../redux/visitors/operations";

function FormUpdateVisitor({ visitor, handleClose}) {
  const [name, setName] = useState(`${visitor.name}`);
  const [lastName, setLastName] = useState(`${visitor.lastName}`);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name": {
        setName(value);
        break;
      }
      case "lastName": {
        setLastName(value);
        break;
      }

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("WORK!");
    const { id } = visitor;
    dispatch(visitorAPI.update({ id, name, lastName }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClose}>
        Update
      </Button>
    </Form>
  );
}

export default FormUpdateVisitor;
