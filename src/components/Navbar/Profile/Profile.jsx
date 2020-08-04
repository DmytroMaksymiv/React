import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo />

            <MyPosts hey='YO'/>
        </div>
    );
}

export default Profile;