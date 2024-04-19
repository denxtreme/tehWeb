import '../components/dash.js'

import { NavBar } from '../components/navbar.js';
import {OrderTab} from '../components/orderTab.js';
import { FooterOb } from '../components/Footer.js';
import {DashboardPage} from '../components/dash.js';

function DashBoard() {

    return(
      <div className='DashBoard'>
        <NavBar />
        <DashboardPage />
        <FooterOb />
      </div>


    );
  }


export default DashBoard