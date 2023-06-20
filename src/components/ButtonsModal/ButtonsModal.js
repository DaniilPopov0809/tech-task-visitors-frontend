    import { useDispatch } from "react-redux";
    import { Button, Modal } from "react-bootstrap";
    import ButtonUpdateVisitor from "../ButtonUpdateVisitor/ButtonUpdateVisitor";
    import visitorAPI from "../../redux/visitors/operations";

    const ButtonsModal = ({ setIsOpenModal, visitor }) => {
    const dispatch = useDispatch();
    return (
        <div
        className="modal show"
        style={{ display: "block", position: "absolute" }}
        >
        <Modal.Dialog>
            <Modal.Header closeButton onClick={() => setIsOpenModal(false)}>
            <Modal.Title>{`What do with ${visitor.name} ${visitor.lastName}?`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Button
                onClick={() => {
                dispatch(visitorAPI.remove(visitor.id));
                setIsOpenModal(false);
                }}
            >
                Delete
            </Button>
            <ButtonUpdateVisitor visitor={visitor} setIsOpenModal={setIsOpenModal}/>
            </Modal.Body>
        </Modal.Dialog>
        </div>
    );
    };

    export default ButtonsModal;
