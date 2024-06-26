import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luke-donaldson-scott-55549a30b/" target="_blank"> <img src={navIcon1} alt ="Linkedin"/> </a>
              <a href="https://jyqx.itch.io/" target="_blank"> <img src={navIcon2} alt ="Itch.io"/> </a>
              <a href="https://www.artstation.com/jyqx" target="_blank"> <img src={navIcon3} alt ="ArtStation"/> </a>
              <a href="https://github.com/Jyqx" target="_blank"> <img src={navIcon4} alt =""/> </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
