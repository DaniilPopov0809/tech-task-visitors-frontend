import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "react-bootstrap";
import VisitorModal from "../VisitorModal/VisitorModal";

function ButtonVisitor({ visitor, setIsOpenModal, name, nameClass}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={nameClass}>
       {name}
      </Button>

      <VisitorModal
        visitor={visitor}
        handleClose={handleClose}
        show={show}
        setIsOpenModal={setIsOpenModal}
        name={name}
      />
    </>
  );
}

export default ButtonVisitor;

ButtonVisitor.propTypes = {
  setIsOpenModal: PropTypes.func,
  visitor: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastname: PropTypes.string,
    date: PropTypes.string,
  }),
  name: PropTypes.string,
};
