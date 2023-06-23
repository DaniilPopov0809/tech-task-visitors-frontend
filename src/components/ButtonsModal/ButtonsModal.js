import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import ButtonUpdateVisitor from "../ButtonUpdateVisitor/ButtonUpdateVisitor";
import visitorOperation from "../../redux/visitors/operations";

const ButtonsModal = ({ setIsOpenModal, visitor }) => {
  const dispatch = useDispatch();
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
          <Button
            style={{ marginRight: 16 }}
            onClick={() => {
              dispatch(visitorOperation.remove(visitor.id));
              setIsOpenModal(false);
            }}
          >
            Delete
          </Button>
          <ButtonUpdateVisitor
            visitor={visitor}
            setIsOpenModal={setIsOpenModal}
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
