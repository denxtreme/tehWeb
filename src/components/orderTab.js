import React from "react";
import '../Styling/order.css'

import { useState } from "react";
import { Container, Row, Col, Tab, Button } from "react-bootstrap";
import { OrderOBJ } from "./orderOBJ";
import { Modal } from "react-bootstrap";

import { FaRegKissWinkHeart } from "react-icons/fa";

export const OrderTab = () => {

  const [showModal, setShowModal] = useState(false);

function obtineProduseCos() {
    console.log(JSON.parse(localStorage.getItem('cos')) || []);
    return JSON.parse(localStorage.getItem('cos')) || [];
}

const cartItem = obtineProduseCos();

function getTotalPrice() {
  let totalSum = 0.0;
  for (const ind in cartItem) {
    totalSum += (parseFloat(cartItem[ind].mPret) * parseFloat(cartItem[ind].mCountCart));
  }
  return totalSum;
} 

function deleteCos() {
  localStorage.removeItem('cos');
  setShowModal(true);
}

const handleCloseModal = () => {
  setShowModal(false);
};



return (

    <section className='order' id = 'order'  style={{ minHeight: 'calc(100vh - 300px)' }}>
      <Container>
        <Row className = "row-order">
          <Col className = "col-order">
            <h2>Orders</h2>
            {cartItem.length === 0 ? (
              <h2 className='empty_cart'>Cart is empty please Select a product</h2>
              ) : (
              <h2 className='empty_cart'>Ajutati-ne sa devenim bogati va rugam frumos! <FaRegKissWinkHeart/></h2>
            )}

            
            <Tab.Container id = "orders-tabs" >
              <Tab.Content>     
                  
                      <Row className = "row_order">
                          { 
                          
                              cartItem.map((supplement, index) => {    //mapam si returnam numele produsului
                                  console.log(supplement);
                                  return (
                                    <OrderOBJ
                                      key={index}
                                      nume={supplement.mName}
                                      numar_serviri={supplement.mNumar_serviri}
                                      cantitate={supplement.mCantitate}
                                      pret={supplement.mPret}
                                      descriere={supplement.mDescriere}
                                      imgUrl={supplement.mImgUrl}
                                      imgCart={supplement.mImgCart}
                                      countCart={supplement.mCountCart}
                                  />                                         
                                  )
                              })
                          }
                      </Row>
              </Tab.Content>
              <h3>Total Price: {getTotalPrice().toFixed(2)} $</h3>
              <div className="Checkout-btn">
                  <button className="Buton_check" onClick={deleteCos}>Sterge cos</button>
                  <button className="Buton_check">Comanda</button>
              </div>
            </Tab.Container>
          
            <Modal className="modal-obj" show={showModal} onHide={handleCloseModal}>
              <Modal.Header className="modal-close-btn" closeButton>
                <Modal.Title>Ai sters cosul!</Modal.Title>
              </Modal.Header>
              <Modal.Body className="body-modal">
                <h4>{`Cosul a fost sters cu succes!`}</h4>
              </Modal.Body>
              <Modal.Footer className="footer-modal">
                <Button variant="secondary" onClick={handleCloseModal}>
                  Închide
                </Button>
              </Modal.Footer>
            </Modal>

          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

