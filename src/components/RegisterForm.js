import React from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {FaUserPen} from "react-icons/fa6";

// import '../Styling/LoginForm.css'
import '../Styling/LoginBase.css'

export const RegisterForm = () =>  {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />               
                    <FaUserAlt className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required />
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Name" required />               
                    <FaUserPen className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Surname" required />               
                    <FaUserPen className="icon"/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="E-mail" required />               
                    <IoMail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Address" required />               
                    <FaHome className="icon"/>
                </div>
                <div className="input-box">
                    <input type="phone" placeholder="Phone Number" required />               
                    <FaPhoneAlt className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label htmlFor=""><input type = "checkbox"/>
                        Remember me
                    </label>
                    <a href="#">Forgot password</a>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p className="reg_p">Already have an account?
                        <a href="/login">Login</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

