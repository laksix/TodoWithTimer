import React from "react";
import FooterItemSelected from "../Footer-list-item-selected";
import FooterItemActive from "../Footer-list-item-active/Footer-list-item-selected";
import FooterItemCompleted from "../Footer-list-item-completed/Footer-list-item-active/Footer-list-item-selected";
import './footer-list.css'
const FooterList = () => {
    return (<ul className="filters">
     <FooterItemSelected/>
     <FooterItemActive/>
     <FooterItemCompleted/>
    </ul>)
}

export default FooterList