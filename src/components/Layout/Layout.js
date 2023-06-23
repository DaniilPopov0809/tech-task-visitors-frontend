// import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./Layout.styled";
import {Container } from "react-bootstrap";

const Layout = () => {
  return (
    <MainContainer className="p-0">
      <Header />
      <main className="bg-light text-center text-dark flex-grow-1">
      {/* <Container className="w-100 h-100 d-flex justify-content-center"> */}
        <Suspense
          fallback={
            // <Container className="d-flex justify-content-center align-items-center w-100 h-100">
            <p className="fs-2 ">Loading...</p> //TODO
            // </Container>
          }
        >
          <Outlet />
        </Suspense>
        {/* </Container> */}
      </main>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
