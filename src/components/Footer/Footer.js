import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light">
      <Container>
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
