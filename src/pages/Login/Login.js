import { Container } from "react-bootstrap";
import VisitorForm from "../../components/VisitorForm/VisitorFrom";

const Login = () => {
  return (
    <Container className="px-3 py-4">
      <h1 className="mb-4">Login Form</h1>
      <VisitorForm />
    </Container>
  );
};

export default Login;
