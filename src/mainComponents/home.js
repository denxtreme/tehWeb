import logo from '../assets/img/logo.svg'
import '../Styling/Home.css'
import '../Styling/banner.css'
import '../Styling/supplement.css'
import '../Styling/navbar.css'
import { NavBar } from "../components/navbar.js";
import { Banner } from '../components/banner.js';
import { Subscriptions } from '../components/subscriptions.js';
import { Supplements } from '../components/supplements.js';
import { ContactOb } from '../components/contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterOb } from '../components/Footer.js';

function Home() {

  return(
    <div className="Home">
      <NavBar />
      <Banner />
      <Subscriptions/>
      <Supplements/>
      <ContactOb/>
      <FooterOb/>
    </div>
  );
}

export default Home
