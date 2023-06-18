import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import FormUpdateVisitor from '../FormUpdateVisitor/FormUpdateVisitor';


function ModalUpdateVisitor({visitor}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update visitor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormUpdateVisitor visitor={visitor} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalUpdateVisitor;