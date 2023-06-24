import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import VisitorsTable from "../../components/VisitorsTable/VisitorsTable";
import ButtonAddVisitor from "../../components/ButtonAddVisitor/ButtonAddVisitor";
import Loader from "../../components/Loader/Loader";
import { selectIsLoading } from "../../redux/visitors/selectors";

const Visitors = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container className="py-4 px-3">
      <h1 className="mb-4">Visitors in the building:</h1>
        <Container className="d-flex flex-column justify-content-center align-items-center p-0">
          <VisitorsTable />
          {isLoading ? <Loader /> : <ButtonAddVisitor />}
        </Container>
      
    </Container>
  );
};

export default Visitors;
