import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "../ModalVisitor/ModalVisitor";

function ButtonUpdateVisitor({ visitor }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal visitor={visitor} handleClose={handleClose} show={show} />
    </>
  );
}

export default ButtonUpdateVisitor;
