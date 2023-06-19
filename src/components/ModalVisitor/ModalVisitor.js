import { Modal } from 'react-bootstrap';
import FormVisitor from '../FormVisitor/FormVisitor';

const ModalVisitor = ({visitor, handleClose, show}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{visitor? "Update visitor": "Add visitor" }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormVisitor visitor={visitor} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalVisitor;
