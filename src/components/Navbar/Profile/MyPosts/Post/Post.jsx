import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (

        <div className={s.item}>
            <img
                src='https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg'/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    );
}

export default Post;