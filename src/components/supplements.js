import { Col, Container, Row } from "react-bootstrap"
import { Nav, Tab } from "react-bootstrap"
import { SupplemObj } from "./supplemObj"

import colorSharp2 from '../assets/img/color-sharp2.png'


import supplements from '../utils/listaSuplimente.js';
import supplements2  from "../utils/listaSuplimente2.js";
import supplements3 from "../utils/listaSuplimente3.js";

export const Supplements = () => {

    return (
        <section className="supplement" id = "supplement">
            <Container>
                <Row className = "row-suppl">
                    <Col className = "col-suppl">
                        <h2>Suplimente</h2>
                        <p>Ai ajuns intr-un punct in care orezul si puiul nu te mai ajuta sa-ti cresti masa musculara? Noi avem solutia. 100% natural!</p>
                        <Tab.Container id = "supplements-tabs" defaultActiveKey = "first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey = "first">Pre Workout</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "second">Post Workout</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "third">Prafuri</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">           
                                    <Row>
                                        {   //panou
                                            supplements.map((supplement, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <SupplemObj key = {index} {...supplement}/> //{...supplement} -> functie spread, paseaza toate elementele unui
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
                                                    <SupplemObj key = {index} {...supplement}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "third">
                                    <Row>
                                        {   //panou
                                            supplements3.map((supplement, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <SupplemObj key = {index} {...supplement}/> //{...supplement} -> functie spread, paseaza toate elementele unui
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