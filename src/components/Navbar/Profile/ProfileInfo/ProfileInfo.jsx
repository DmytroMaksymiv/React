import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg'/>
            </div>
            <div className={s.textredact}>
                <center>
                    <h2> Avatar+Discription</h2>
                </center>
            </div>
        </div>
    );
}

export default ProfileInfo;