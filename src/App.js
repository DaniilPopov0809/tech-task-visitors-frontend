import VisitorsTable from "./components/VisitorsTable/VisitorsTable";
import ButtonAddVisitor from "./components/ButtonAddVisitor/ButtonAddVisitor";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";


function App() {
  return (
    <>
      <Header/>
      <Container style={{width:700}} >
      <VisitorsTable />
      <ButtonAddVisitor />
      </Container>
      <Footer/>
     
    </>
  );
}

export default App;
