import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import twitter from "../assets/img/icon-twitter.svg";
import github from "../assets/img/icon-github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center mt-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sandeep-thakur-698398176/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Sandeep16ibm">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://twitter.com/sandeepX007">
                <img src={twitter} alt="Icon" />
              </a>
            </div>
            <p>Sandeep Thakur</p>
            <p>Sandeep16ibm@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
