import { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { PublicRoute } from "./Routes/PublicRoute";
import authOperation from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const Home = lazy(() => import("./pages/Home/Home"));
const Visitors = lazy(() => import("./pages/Visitors/Visitors"));
const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p className="fs-3 d-flex justify-content-center align-items-center vh-100">
      Refresh user...
    </p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={<PublicRoute component={Login} redirectTo="/visitors" />}
        />
        <Route
          path="/visitors"
          element={<PrivateRoute component={Visitors} redirectTo="/login" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
