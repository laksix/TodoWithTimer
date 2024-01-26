import React, {Component} from "react";

import './footer-list-item-selected.css'
export default class FooterItemSelected extends Component {
    render () {
        return (
            <li>
                <button className="selected">All</button>
            </li>
        )
    }
}