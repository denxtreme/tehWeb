import '../Styling/navbar.css'
import { Footer } from '../components/Footer.js';

import { NavBar } from '../components/navbar.js';
import {OrderTab} from '../components/orderTab.js';
import { Supplements } from '../components/supplements.js';
import { Container } from 'react-bootstrap';

import { ContactOb } from '../components/contact.js'
import { FooterOb } from '../components/Footer.js';

function Contact() {

    return(
      <div className='Contact'>
        <NavBar />
        <ContactOb />
        <FooterOb />
      </div>


    );
  }


export default Contact