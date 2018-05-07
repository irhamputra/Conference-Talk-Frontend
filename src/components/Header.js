import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <div className="container">
        <div className="navbar nav">
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">GraphQL Asia</NavLink>
                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div className="navbar-menu" id="navbarMenuHeroB">
                <div className="navbar-end nav">
                    <NavLink className="navbar-item" to="/#speak">Speak</NavLink>
                    <NavLink className="navbar-item" to="/team">Team</NavLink>
                    <NavLink className="navbar-item" to="/#sponsor">Sponsor</NavLink>
                    <a className="navbar-item button is-rounded is-danger" href="https://eventbrite.com" target="_blank">Get Ticket</a>
                </div>
            </div>
        </div>
    </div>
);

export default Header;