import '../Styling/Home.css'
import '../Styling/banner.css'
import '../Styling/supplement.css'
import '../Styling/navbar.css'

import { Banner } from '../components/banner.js';

import { NavBar } from '../components/navbar.js';
import { FooterOb } from '../components/Footer.js';
import { Supplements } from '../components/supplements.js';
import { Equipment } from '../components/equipment.js';

function Shop() {

    return(
      <div className="Shop">
        <NavBar />
        <Equipment />
        <Supplements/>
        <FooterOb />
      </div>
    );
  }


export default Shop