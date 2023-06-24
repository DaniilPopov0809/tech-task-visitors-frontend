import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import ButtonVisitor from "../ButtonVisitor/ButtonVisitor";

const ButtonsModal = ({ setIsOpenModal, visitor }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute" }}
    >
      <Modal.Dialog size="sm">
        <Modal.Header closeButton onClick={() => setIsOpenModal(false)}>
          <Modal.Title
            style={{ fontSize: 20 }}
          >{`What do with ${visitor.name} ${visitor.lastname}?`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ButtonVisitor
            visitor={visitor}
            setIsOpenModal={setIsOpenModal}
            name={"Delete"}
            nameClass="me-4"
          />
          <ButtonVisitor
            visitor={visitor}
            setIsOpenModal={setIsOpenModal}
            name={"Update"}
          />
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default ButtonsModal;

ButtonsModal.propTypes = {
  setIsOpenModal: PropTypes.func,
  visitor: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    lastname: PropTypes.string,
    date: PropTypes.string,
  }),
};
