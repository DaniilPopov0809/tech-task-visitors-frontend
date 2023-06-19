import VisitorsTable from "./components/VisitorsTable/VisitorsTable";
import ButtonAddVisitor from "./components/ButtonAddVisitor/ButtonAddVisitor";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <ButtonAddVisitor />
      <VisitorsTable />
      <Footer/>
    </>
  );
}

export default App;
