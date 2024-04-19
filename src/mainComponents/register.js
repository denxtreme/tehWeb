
import '../Styling/navbar.css'
import '../Styling/LoginBase.css'

import { NavBar } from '../components/navbar.js';
import {RegisterForm} from '../components/RegisterForm.js'

function Register() {

    return(
      <div className='Register'>
        <NavBar />
        <div className='body-login'>
          <RegisterForm />
        </div>
      </div>


    );
  }


export default Register