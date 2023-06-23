import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "react-bootstrap";
import VisitorModal from "../VisitorModal/VisitorModal";

function ButtonUpdateVisitor({ visitor, setIsOpenModal }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <VisitorModal
        visitor={visitor}
        handleClose={handleClose}
        show={show}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
}

export default ButtonUpdateVisitor;

ButtonUpdateVisitor.propTypes = {
  setIsOpenModal: PropTypes.func,
  visitor: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastname: PropTypes.string,
    date: PropTypes.string,
  }),
};
