import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./Layout.styled";

const Layout = () => {
  return (
    <MainContainer className="p-0">
      <Header />
      <main className="bg-light text-center text-dark flex-grow-1">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
