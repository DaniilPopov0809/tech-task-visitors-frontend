import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-0 min-vh-100 d-flex flex-column">
      <Header />
      <main className="bg-light text-center text-dark flex-grow-1">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
