import React from "react";
import './footer-list-item.css'
const FooterItem = ({status,name,click}) => {
    return (
        <li>
            <button className={status ? 'selected' : ''} onClick = {click}>{name}</button>
        </li>
    )
}
export default FooterItem