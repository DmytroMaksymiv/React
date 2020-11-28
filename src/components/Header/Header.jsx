import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <center><img
                src='https://safrc.org/uploads/monthly_2020_03/safrc.png.fa36d42bd2cac7c836a856e7f874f10a.png'/>
            </center>
            <div>
                <center><strong>Save the WORLD !!!</strong></center>
            </div>

            <div className={s.loginBlock}>

                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>

        </header>
    );
}

export default Header;