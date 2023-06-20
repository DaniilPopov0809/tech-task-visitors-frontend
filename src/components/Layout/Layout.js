import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import VisitorsTable from "../VisitorsTable/VisitorsTable";
import ButtonAddVisitor from "../ButtonAddVisitor/ButtonAddVisitor";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { Title } from "./Layout.styled";
import { selectIsLoading } from "../../redux/visitors/selectors";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  
  return (
    <Container className="p-0">
      <Header />
      <main className="bg-light text-center text-dark">
        <Container className="py-4 px-3">
          <Title>Visitors in the building:</Title>
          <Container className="d-flex flex-column justify-content-center align-items-center p-0">
            <VisitorsTable />
            {isLoading? <Loader/> : <ButtonAddVisitor />}
          </Container>
        </Container>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
