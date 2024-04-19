import { Col, Container, Row } from "react-bootstrap"
import { Nav, Tab } from "react-bootstrap"

import colorSharp2 from '../assets/img/color-sharp2.png'
import "../Styling/dashboard.css"



import { ChangeInfos } from "./changeInformation"
import {ViewInfo} from "./viewInfo.js"
import { ViewOrder } from "./viewOrders.js"



export const DashboardPage = () => {

    const userData = {
        username: "denxtreme",
        clientID: "1",
        usertype: "admin",
        nume: "xxx",
        prenume: "vvv",
        email: "denis@yahoo.com",
        adresa: "Str zzz12, asa, aba",
        telefon: "0788881234"
      };

      const userUser = [
        {
        username: "denxtreme",
        clientID: "1",
        usertype: "admin"
      }, 
      {
        username: "denreme",
        clientID: "2",
        usertype: "user"
      }

    ]


      const orderzzz = [
        {
          orderID: "18",
          Produse: "2",
          Cantitate: "10 kg",
          Total: "9.99",
          Adresa: "Str zzz12, asa, aba sdg sdgsdgsdgsdgsdg",
          Expediat: "25-03-2024 12:00:00",
          Livrat: "27-03-2024 18:00:00",
          descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
        },
        {
            orderID: "18",
            Produse: "2",
            Cantitate: "10 kg",
            Total: "9.99",
            Adresa: "Str zzz12, asa, aba sdg sdgsdgsdgsdgsdg",
            Expediat: "25-03-2024 12:00:00",
            Livrat: "27-03-2024 18:00:00",
            descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
          },
          {
            orderID: "18",
            Produse: "2",
            Cantitate: "10 kg",
            Total: "9.99",
            Adresa: "Str zzz12, asa, aba sdg sdgsdgsdgsdgsdg",
            Expediat: "25-03-2024 12:00:00",
            Livrat: "27-03-2024 18:00:00",
            descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
          },
          {
            orderID: "18",
            Produse: "2",
            Cantitate: "10 kg",
            Total: "9.99",
            Adresa: "Str zzz12, asa, aba sdg sdgsdgsdgsdgsdg",
            Expediat: "25-03-2024 12:00:00",
            Livrat: "27-03-2024 18:00:00",
            descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
          },
          {
            orderID: "18",
            Produse: "2",
            Cantitate: "10 kg",
            Total: "9.99",
            Adresa: "Str zzz12, asa, aba sdg sdgsdgsdgsdgsdg",
            Expediat: "25-03-2024 12:00:00",
            Livrat: "27-03-2024 18:00:00",
            descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
          },        {
            orderID: "18",
            Produse: "2",
            Cantitate: "10 kg",
            Total: "9.99",
            Adresa: "Str zzz12, asa, aba sdg sdgsdgsdgsdgsdg",
            Expediat: "25-03-2024 12:00:00",
            Livrat: "27-03-2024 18:00:00",
            descriere: "Set de gantere perfect pentru antrenamentul de acasa. Ganterele nu sunt reglabile, greutatea este nemodificabila",
          }
          
      ];


    return (
        <section className="dashb" id = "dashb">
            <Container>
                <Row className = "row-dashb">
                    <Col className = "col-dashb">
                        <h2>Dashboard</h2>
                        <p>Ai uitat sa mentionezi ceva sau unele date sau modificat? Sau pur si simplu vrei sa ti verifici istoricul de comenzi? Aici gasesti tot ce ai nevoie</p>
                        <Tab.Container id = "dashbs-tabs" defaultActiveKey = "first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey = "first">Account settings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "second">Account Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = "third">Order History</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">           
                                    <Row>
                                        {   
                                            <div className='body-info'>
                                                < ChangeInfos />
                                            </div>
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "second">
                                    <Row>
                                        {   
                                            <ViewInfo data={userData} />
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "third">
                                    <Row>
                                        {   
                                            <ViewOrder orders={orderzzz} />
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