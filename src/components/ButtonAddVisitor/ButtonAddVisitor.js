import PropTypes from 'prop-types';
import { useState } from "react";
import { Button } from "react-bootstrap";
import VisitorModal from "../VisitorModal/VisitorModal";

function ButtonAddVisitor({ visitor }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add visitor
      </Button>

      <VisitorModal visitor={visitor} handleClose={handleClose} show={show} />
    </>
  );
}

export default ButtonAddVisitor;

ButtonAddVisitor.propTypes = {
  visitor: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastName: PropTypes.string,
    date: PropTypes.string,
  })
}