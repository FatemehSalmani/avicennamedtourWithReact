import React from "react";
import './footerStyle.css'

const Footer = ()=>{
    return<div className={"footer"}>
        <div className={"request"}>
        <h4>Consultation request :</h4>
            <div className={"reg"}>
                <input className={"other"} placeholder={"Full Name"}/>
                    <input className={"phoneCode"} placeholder={"Code"}/>
                    <input className={"phoneNum"} placeholder={"Phone Number"}/>
                <input className={"other"} placeholder={"Email"}/>
                <input className={"other"} placeholder={"field of consultation"}/>
                <a className={"reqBut"} href={"./"}>request consultation</a>
            </div>


        </div>
        <div className={"exp"}>
            <img className={"fImg"} src={"http://avicennamedtour.com/Content/base/dynamic/shopping1159/img/104082.jpg"}/>
            <div className={"fText"}>We are ready at the Avicenna international medical tourism company to provide the best medical sevices in corporation with the best doctors, hospitals, hotels, and special translator for treatment of cardiovascular diseases, ortopedic and eye problems, infertility, weight loss, hair transplant, rhinoplasty and other services</div>
        </div>
        <div className={"contact"}>
            <ul className="footer-list-top contact">
                <li><h4 className="footer-list-header">Contact Us</h4></li>
                <li><span className="contact_icon1 location"></span>
                    <address>Address:Narmak, Janbazan Street, Hamza Louie Alley, No. 10</address>
                </li>
                <li><span className="contact_icon1 telephone"></span>
                    <p>Telephone :<a href="tel:00989120994336">+989120994336</a></p></li>

                <li><span className="contact_icon1 Email"></span>
                    <a className="generic-anchor footer-list-anchor" href="mailto:Info@avicennamedtour.com">Email:
                        Info@avicennamedtour.com</a></li>
                <li><span className="contact_icon1 clock"></span>
                    <address>Everyday from 9 am to 6 pm
                    </address>
                </li>


            </ul>
        </div>

    </div>
}

export default Footer;