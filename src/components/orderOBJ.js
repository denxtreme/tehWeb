import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

export const OrderOBJ = ({ nume, numar_serviri, cantitate, pret, descriere, imgUrl, imgCart, countCart}) => {
  const [showModal, setShowModal] = useState(false);

    const prod = [
      {
        mName: nume, 
        mNumarServiri: numar_serviri, 
        mCantitate: cantitate, 
        mPret: pret, 
        mDescriere: descriere, 
        mImgUrl: imgUrl, 
        mImgCart: imgCart, 
        mCountCart: countCart,
      }
    ]


  function reloadPage() {
    window.location.reload();
  }

  function adaugaInCos(produs) { 
    const produseInCos = JSON.parse(localStorage.getItem('cos')) || [];

    // Verifică dacă produsul există deja în coș
    const exista = produseInCos.some((p) => p.mName === produs.mName);
  
    if (exista) {
      // Dacă produsul există deja în coș, poți actualiza cantitatea sau face altceva
      // În acest exemplu, vom actualiza cantitatea
      produseInCos.forEach((p) => {
        if (p.mName === produs.mName) {
          p.mCountCart += 1;
        }
      });
    } else {
      // Dacă produsul nu există, adaugă-l în coș
      produseInCos.push({
        mName: produs.mName,
        mNumarServiri: produs.mNumarServiri, 
        mCantitate: produs.mCantitate, 
        mPret: produs.mPret, 
        mDescriere: produs.mDescriere, 
        mImgUrl: produs.mImgUrl, 
        mImgCart: produs.mImgCart, 
        mCountCart: 1,
        // alte proprietăți ale produsului
      });
      console.log(produseInCos);
    }
  
    // Salvează produsele actualizate în localStorage
    localStorage.setItem('cos', JSON.stringify(produseInCos));
  }

  const addToCart = (produss) => {
    // Implementează aici logica adăugării în coș
    // Setează starea pentru afișarea ferestrei modale
    setShowModal(true);
    console.log(produss[0].mName);
    adaugaInCos(produss[0]);
  };

  const handleCloseModal = () => {
    // Închide fereastra modală
    setShowModal(false);
    reloadPage();
  };

  
  return (
    <Col sm={6} md={4} lg = {3}>
      <div className="order-imgbox">
        <img src={imgUrl} alt={nume} className="imagine2" />
        <div className="order-txtx">
          <h4>{nume}</h4>
          <span>Produse in cos: {countCart}</span> <br/>
          <span>Pret: {parseFloat(pret) * parseInt(countCart)}$</span> <br/>
          <div className="divShopCartbtn">
            <button className="shopCartbtn" onClick={() => addToCart(prod)}>
              <a>Adauga in cos <img src={imgCart} alt="Cart" /></a>
            </button>
          </div>
        </div>
      </div>

      {/* Fereastra modală */}
      <Modal className="modal-obj" show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="modal-close-btn" closeButton>
          <Modal.Title>Produs adaugat în cos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <h4>{`Produsul ${nume} a fost adăugat în coș.`}</h4>
        </Modal.Body>
        <Modal.Footer className="footer-modal">
          <Button variant="secondary" onClick={handleCloseModal}>
            Închide
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
