import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container className="px-3 py-4">
      <h1 className="mb-5">Welcome! </h1>
      {isLoggedIn ? (
        <h2>You are logged in, you can <Link to="/visitors">continue</Link> working.</h2>
      ) : (
        <h2>
          This service for manual registration of visitors in the building. If
          you didn't register, please, <Link to="/login">Log In</Link> as an
          administrator to continue working.
        </h2>
      )}
    </Container>
  );
};

export default Home;
