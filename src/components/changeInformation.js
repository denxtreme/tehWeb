import React from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {FaUserPen} from "react-icons/fa6";

import '../Styling/changeInfo.css'

export const ChangeInfos = () =>  {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Change Information</h1>
                <div className="input-box">
                    <input type="password" placeholder="Password*" />
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password*" />
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="E-mail*" />               
                    <IoMail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Address*" />               
                    <FaHome className="icon"/>
                </div>
                <div className="input-box">
                    <input type="phone" placeholder="Phone Number*" />               
                    <FaPhoneAlt className="icon"/>
                </div>

                <button type="submit">Save new info</button>
                <div className="register-link">
                    <p className="reg_p">Actualizeaza doar informatiile care te intereseaza</p>
                </div>
            </form>
        </div>
    )
}

