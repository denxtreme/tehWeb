import React from "react";
import '../Styling/dashAdmin.css'


import { Container, Row, Col, Tab, Button } from "react-bootstrap";
import { UserManagement } from "./userManagement";




export const DashAdminconn = () => {


return (

    <section className='dash_admin' id = 'dash_admin'  style={{ minHeight: 'calc(100vh - 300px)' }}>
      <Container>
        <Row className = "row-dash_admin">
          <Col className = "col-dash_admin">
              <>
                <h2 className='dash_admin_h2'>
                <UserManagement />
                </h2>          
              </>

          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

