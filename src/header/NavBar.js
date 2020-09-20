import React from 'react';
import'./headerStyle.css'
import {Nav} from "react-bootstrap";
import RightNav from "./RightNav";
import Burger from "./Burger";


const NavBar = ()=>
    <Nav className={"nav"}>
        <div className={"logo"}>
            <img src={"https://file.haftsetare.com/Content/base/dynamic/shopping1159/img/104082.jpg"}/>
        </div>
      <Burger/>
        <RightNav/>
    </Nav>

export default NavBar;

