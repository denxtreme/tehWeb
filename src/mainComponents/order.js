
import '../Styling/navbar.css'
import '../Styling/order.css'

import { NavBar } from '../components/navbar.js';
import {OrderTab} from '../components/orderTab.js';
import { FooterOb } from '../components/Footer.js';


function Order() {

    return(
      <div className='Order'>
        <NavBar />
        <OrderTab />
        <FooterOb />
      </div>


    );
  }


export default Order