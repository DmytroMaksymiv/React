import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>


            <div className={s.item} >
                <NavLink to="/users" activeClassName={s.activeLink}><strong>USERS</strong></NavLink>
            </div>


            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}><strong>Profile</strong></NavLink>
            </div>
            <div className={s.item} >
                <NavLink to="/dialogs" activeClassName={s.activeLink}><strong>Messages</strong></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}><strong>News</strong></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}><strong>Music</strong></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}><strong>Settings</strong></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;