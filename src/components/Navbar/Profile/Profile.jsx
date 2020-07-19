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
            <div>
                Avatar+Discription
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;