import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light mt-auto">
      <Container className=" p-3">
        <p>All rights reserved © {new Date().getFullYear()} by Daniil Popov</p>
        <p className="m-0">
          e-mail: <a href="mailto:x6uhrox@gmail.com">x6uhrox@gmail.com</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
