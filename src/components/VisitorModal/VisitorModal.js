import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import VisitorForm from "../VisitorForm/VisitorFrom";

const VisitorModal = ({
  visitor,
  handleClose,
  show,
  setIsOpenModal,
  inputOne,
  inputTwo,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>{visitor ? "Update visitor" : "Add visitor"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <VisitorForm
          visitor={visitor}
          handleClose={handleClose}
          setIsOpenModal={setIsOpenModal}
          inputOne={inputOne}
          inputTwo={inputTwo}
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
    lastname: PropTypes.string,
    date: PropTypes.string,
  }),
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  setIsOpenModal: PropTypes.func,
};
