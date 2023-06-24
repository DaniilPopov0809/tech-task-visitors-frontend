import { Container } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {

  return (
    <Container className="px-3 py-4">
    <h1 className="mb-4">Login Form</h1>
    <LoginForm/>
    </Container> 
  );
};

export default Login;
