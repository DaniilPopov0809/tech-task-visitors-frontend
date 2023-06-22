import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import FormVisitor from "../FormVisitor/FormVisitor";

const VisitorModal = ({ visitor, handleClose, show, setIsOpenModal }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>{visitor ? "Update visitor" : "Add visitor"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormVisitor
          visitor={visitor}
          handleClose={handleClose}
          setIsOpenModal={setIsOpenModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default VisitorModal;

VisitorModal.propTypes = {
  visitor: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastName: PropTypes.string,
    date: PropTypes.string,
  }),
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  setIsOpenModal: PropTypes.func,
};
