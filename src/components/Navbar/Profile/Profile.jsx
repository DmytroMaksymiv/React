import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg'/>
            </div>
            <div className={s.textredact}>
                <center>
                    <h2> Avatar+Discription</h2>
                </center>
            </div>

            <MyPosts hey='YO'/>

        </div>
    );
}

export default Profile;