import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/header_img.png";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const FooterOb = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                <Col sm = {6}>
                    <img src = {logo} alt = "Logo" />
                </Col>
                <Col sm = {6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href = "https://www.linkedin.com/company/fitness-coach" target = "_blank"><img src = {navIcon1}/></a>
                        <a href = "https://www.facebook.com/FCSBOfficial/" target = "_blank"><img src = {navIcon2}/></a>
                        <a href = "https://www.instagram.com/leomessi/" target = "_blank"><img src = {navIcon3}/></a>
                    </div>
                    <p>CopyRight 2024. All Right Reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}