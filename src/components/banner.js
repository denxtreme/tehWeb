import {useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import headerImg from "../assets/img/header_img.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);  // delay random de la 0.2-0.3 secunde
    const [index, setIndex] = useState(1);
    const toRotate = [ "Proteins", "Dumbells", "Subscriptions" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();      //la fiecare tick apare o litera 
        }, delta )  //intervalul de timp la care textul va fi upadtat
                    //cu cat cineva scrie, scrisul apare pe ecran mai rapid(efect tranzitie natural)
        return () => {clearInterval(ticker)};  //facem clear contra memoryLeaks
    }, [text]) // dependency array - text; Functia este reapelata cand text primeste
                //update ; timerul este setat sau curatat 

    const tick = () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        //daca se sterge, mai scadem o litera, daca nu se sterge adaugam o litera

        setText(updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)  //cu cat se scriu mai multe litere, textu devine mai rapid
                                                //senzatie naturala
        }

        if(!isDeleting && updatedText === fullText) {  //daca textu nu se sterge si textul este full
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){ //daca textul se sterge si nu mai avem text deloc
            setIsDeleting(false);
            setLoopNum(loopNum + 1); //trecem la urmatoru element
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="allign-items-center"> 
                    <Col xs = {12} md ={6} xl = {7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate_bounce" : ""}>
                                <span className="tagLine">
                                    Welcome to IronFitness Gym
                                </span>
                                <h1>Super abonamente si oferte<span className="wrap"> {text}</span></h1>
                                <p>La noi gasiti cele mai tari oferte. De la abonamente pana la proteine si echipamente sportive, gasiti orice</p>
                                <button onClick={() => console.log('connect')}><a href="/login" className="href_banner">Lets connect</a> <ArrowRightCircle size = {25}/></button>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {headerImg} alt = "Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}