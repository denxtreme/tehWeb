import { Col, Container, Row } from "react-bootstrap"
import { Nav, Tab } from "react-bootstrap"


import { EquipmObj } from "./equipmObj.js"

import colorSharp2 from '../assets/img/color-sharp2.png'


import echipamente from '../utils/listaEchipamente.js';
import echipamente2  from "../utils/listaEchipamente2.js";
import echipamente3 from "../utils/listaEchipamente3.js";
import echipamente4 from "../utils/listaEchipamente4.js";
import echipamente5 from "../utils/listaEchipamente5.js";
import echipamente6 from "../utils/listaEchipamente6.js";



export const Equipment = () => {
    return (
        <section className="supplement" id = "supplement">
            <Container>
                <Row>
                    <Col>
                        <h2>Echipamente sportive</h2>
                        <p>Vrei sa continui antrenamentul chiar si in zilele in care nu poti ajunge la noi? Achizitioneaza echipamentele noastre sportive care iti vor testa limitele!</p>
                        <Tab.Container id = "supplements-tabs" defaultActiveKey = "first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey = "first">Greutati</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "second">Aparate fitness</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "third">Accesorii cardio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "fourth">Accesorii fitness</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "fifth">Accesorii baieti</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "sixth">Accesorii fete</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">           
                                    <Row>
                                        {   //panou
                                            echipamente.map((eq, ind) => {
                                                return (
                                                    <EquipmObj key = {ind} {...eq}/>
                                                )
                                            }) 
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "second">
                                    <Row>
                                        {   //panou
                                            echipamente2.map((eq, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <EquipmObj key = {index} {...eq}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "third">
                                    <Row>
                                        {   //panou
                                            echipamente3.map((eq, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <EquipmObj key = {index} {...eq}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "fourth">
                                    <Row>
                                        {   //panou
                                            echipamente4.map((eq, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <EquipmObj key = {index} {...eq}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "fifth">
                                    <Row>
                                        {   //panou
                                            echipamente5.map((eq, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <EquipmObj key = {index} {...eq}/> //{...supplement} -> functie spread, paseaza toate elementele unui
                                                                                                //obiect catre o componenta, fara a le enumera manual una cate una
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "sixth">
                                    <Row>
                                        {   //panou
                                            echipamente6.map((eq, index) => {    //mapam si returnam numele produsului
                                                return (
                                                    <EquipmObj key = {index} {...eq}/> //{...supplement} -> functie spread, paseaza toate elementele unui
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