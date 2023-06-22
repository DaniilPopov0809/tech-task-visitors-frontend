import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Visitors from "./pages/Visitors/Visitors";
import Layout from "./components/Layout/Layout";

function App () {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/table" element={<Visitors />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  );
}

export default App;
