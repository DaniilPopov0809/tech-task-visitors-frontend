import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center">
      <Container>
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
