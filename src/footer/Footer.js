import React from "react";
import './footerStyle.css'

const Footer = ()=>{
    return<div className={"footer"}>
        <div className={"request"}>
        <h4>Consultation request :</h4>
            <div className={"reg"}>
                <input  placeholder={"Full Name"}/>
                <input className={"phone"} placeholder={"Code"}/>
                <input className={"phone"} placeholder={"Phone Number"}/>
                <input placeholder={"Email"}/>
                <input placeholder={"field of consultation"}/>
            </div>
        </div>
        <div className={"exp"}></div>
        <div className={"contact"}></div>
        <div className={"fOf"}></div>
    </div>
}

export default Footer;