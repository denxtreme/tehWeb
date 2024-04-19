
import '../Styling/navbar.css'
import '../Styling/LoginBase.css'

import { NavBar } from '../components/navbar.js';
import { LoginForm } from '../components/LoginForm.js';
import { FooterOb } from '../components/Footer.js';

function Login() {

    return(
      <div className='Login'>
        <NavBar />
        <div className='body-login'>
          <LoginForm />
        </div>
      </div>


    );
  }


export default Login