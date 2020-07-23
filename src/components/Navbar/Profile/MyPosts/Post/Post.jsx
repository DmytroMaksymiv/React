import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.PostBorder}>
                <div>
                    <strong>Company name:</strong> {props.company}
                </div>
                <div>
                    <strong>Company location:</strong> {props.location}
                </div>

                    <img
                        src='https://img.championat.com/s/735x490/news/big/p/z/samaja-seksualnaja-sportsmenka-mira-pokazala-foto-v_1592462937537164433.jpg'/>

                <div>
                    <strong>Like:</strong> <span>{props.like}</span>
                </div>

                <div className={s.TextPostRight}>
                    <strong> NEWS: </strong>{props.message}
                </div>
            </div>
        </div>
    );
}

export default Post;