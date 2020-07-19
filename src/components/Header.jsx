import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <center><img
                src='https://safrc.org/uploads/monthly_2020_03/safrc.png.fa36d42bd2cac7c836a856e7f874f10a.png'/>
            </center>
            <div>
                <center><h3>Save the WORLD !!!</h3></center>
            </div>
        </header>
    );
}

export default Header;