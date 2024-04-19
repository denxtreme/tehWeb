import { Col, Container, Row } from "react-bootstrap"
import { Nav, Tab } from "react-bootstrap"
import { AbonObj } from "./abonObj.js"

import colorSharp2 from '../assets/img/color-sharp2.png'


import supplements from '../utils/listaAbonamente.js';
import supplements2  from "../utils/listaAbonamente2.js";

export const Abonamente = () => {

    return (
        <section className="abonament" id = "abonament">
            
            <Container>
                <Row className = "row-abon">
                    <Col className = "col-abon">
                        <h2>Abonamente</h2>
                        <p>Alege sa te inrolezi in randul celor mai prietenosi culturisti din Romania! Antrenamente pline de entuziasm si de voie buna</p>
                        <Tab.Container id = "abonaments-tabs" defaultActiveKey = "first">
                            <Nav variant="pillabons" className="nav-pillabons mb-5 justify-content-center align-items-center" id="pillabons-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey = "first">Abonament simplu</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "second">Abonament cu coach</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">           
                                    <Row>
                                        {   //panou
                                            supplements.map((supplement, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <AbonObj key = {index} {...supplement}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "second">
                                    <Row>
                                        {   //panou
                                            supplements2.map((supplement, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <AbonObj key = {index} {...supplement}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className= "background-image-right" src = {colorSharp2}></img>
        </section>
    )
}