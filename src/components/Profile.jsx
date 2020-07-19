import React from "react";
import s from "./Profile.module.css";

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
            <div>
                My Posts
            </div>
            <div>
                New Post
            </div >
            <div className='posts'>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
                <div className={s.item}>
                    Post 3
                </div>
            </div>
        </div>
    );
}

export default Profile;