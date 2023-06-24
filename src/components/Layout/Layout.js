import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <Container className="p-0 min-vh-100 d-flex flex-column">
      <Header />
      <main className="bg-light text-center text-dark flex-grow-1">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
