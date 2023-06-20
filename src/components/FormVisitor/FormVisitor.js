import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import visitorAPI from "../../redux/visitors/operations";
import createData from "../../utils/createDate";

function FormVisitor({ visitor, handleClose, setIsOpenModal }) {
  const [name, setName] = useState(visitor ? `${visitor.name}` : "");
  const [lastName, setLastName] = useState(
    visitor ? `${visitor.lastName}` : ""
  );

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
    if (visitor) {
      const { id } = visitor;
      dispatch(visitorAPI.update({ id, name, lastName }));
      setIsOpenModal(false);
    } else {
      const date = createData();
      dispatch(visitorAPI.create({ name, lastName, date }));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="text-center">
        <Form.Group className="mb-3 text-start" >
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
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleClose}
          disabled={!name || !lastName}
        >
          {visitor ? "Update" : "Add"}
        </Button>
      </Form>
    </>
  );
}

export default FormVisitor;
