import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg";

export const ContactOb = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => ({
        ...formDetails,
        [category]: value
    })
    
    //facem request la un api, deci operatie asincrona
    const handleSubmit = async (e) => {
        //nu vrem ca pagina sa si dea refresh cand userul da send
        e.preventDefault();
        setButtonText('Sending...');
        let resp = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),

        });
        setButtonText("Send");
        let result = resp.json();
        setFormDetails(formInitialDetails); //facem clear la date, aducem la forma initiala
        
        if (result.code === 200) {
            setStatus({success: true, message: 'Message sent succesfully'});
        } else {
            setStatus({success : false, message: 'Message not sent! Try again!'});
        }
    };

    return (
        <section className="contact" id = "connect">
            <Container>
                <Row className = "align-items-center">
                    <Col md = {6}>
                        <img src={contactImg} alt = "Contact us"></img>
                    </Col>
                    <Col md = {6}>
                        <br/><br/>
                      <h2>Get in Touch</h2>
                      <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} 
                                placeholder="First Name" onChange = {(e) => 
                                onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-2">
                                <input type="text" value={formDetails.lastName} 
                                placeholder="Last Name" onChange = {(e) => 
                                onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-3">
                                <input type="email" value={formDetails.email} 
                                placeholder="Email" onChange = {(e) => 
                                onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-4">
                                <input type="tel" value={formDetails.phone} 
                                placeholder="Phone Number" onChange = {(e) => 
                                onFormUpdate('phone', e.target.value)}/>
                            </Col>

                            <Col>
                                <textarea row = "6" value = {formDetails.message}
                                placeholder = "Message" onChange = {(e) =>
                                onFormUpdate('message', e.target.value)}/>
                                <button type = "submit">
                                    <span>
                                        {buttonText}
                                    </span>
                                </button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                      </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}