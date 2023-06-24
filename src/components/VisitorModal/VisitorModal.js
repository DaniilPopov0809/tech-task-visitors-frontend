import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Container, Modal } from "react-bootstrap";
import VisitorForm from "../VisitorForm/VisitorFrom";
import visitorOperation from "../../redux/visitors/operations";

const VisitorModal = ({ visitor, handleClose, show, setIsOpenModal, name }) => {
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <Modal.Header closeButton>
        {name === "Delete" ? (
          <Modal.Title className="text-center">
            Delete {visitor.name} {visitor.lastname}?
          </Modal.Title>
        ) : (
          <Modal.Title>
            {visitor ? "Update visitor" : "Add visitor"}
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        {name !== "Delete" ? (
          <VisitorForm
            visitor={visitor}
            handleClose={handleClose}
            setIsOpenModal={setIsOpenModal}
            editForm={"editForm"}
          />
        ) : (
          <Container className="text-center">
            {" "}
            <Button
              className="me-4"
              onClick={() => {
                dispatch(visitorOperation.remove(visitor.id));
                setIsOpenModal(false);
              }}
            >
              Yes
            </Button>
            <Button onClick={() => setIsOpenModal(false)}>No</Button>
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};

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
  name: PropTypes.string,
};

export default VisitorModal;
