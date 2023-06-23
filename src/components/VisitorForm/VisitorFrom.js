import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import visitorOperation from "../../redux/visitors/operations";
import createData from "../../utils/createDate";

function VisitorForm({ visitor, handleClose, setIsOpenModal }) {
  const [name, setName] = useState(visitor ? `${visitor.name}` : "");
  const [lastname, setlastname] = useState(
    visitor ? `${visitor.lastname}` : ""
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name": {
        setName(value);
        break;
      }
      case "lastname": {
        setlastname(value);
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
      dispatch(visitorOperation.update({ id, name, lastname }));
      setIsOpenModal(false);
    } else {
      const date = createData();
      dispatch(visitorOperation.create({ name, lastname, date }));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="text-start">
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
        <Form.Group className="mb-3">
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
    </>
  );
}

export default VisitorForm;

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
