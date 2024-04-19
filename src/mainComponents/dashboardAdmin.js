import '../components/dash.js'

import { NavBar } from '../components/navbar.js';
import { FooterOb } from '../components/Footer.js';

import { DashAdminconn } from '../components/dashAdminconn.js';

function DashAdmin() {

    return(
      <div className='DashBoard'>
        <NavBar />
        <DashAdminconn />
        <FooterOb />
      </div>


    );
  }


export default DashAdmin